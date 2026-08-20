// Serveur statique (zéro dépendance) — compression gzip, cache, pré-rendu par route.
const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const PORT = process.env.PORT || 3000;
const BASE = process.env.PUBLIC_URL || "https://www.webgrowth.lu";

const ROUTE_SLUGS = [
  "services",
  "developpement-logiciel",
  "application-mobile",
  "creation-site-web",
  "design-ui-ux",
  "seo-conversion",
  "conseil-it",
  "objectifs",
  "lexique",
];

// Anciennes URL de services retirées → redirection 301 vers le hub (SEO)
const REDIRECTS = {
  "/strategie-de-marque": "/services",
  "/reseaux-sociaux": "/services",
  "/publicite-en-ligne": "/services",
  "/video-motion": "/services",
  "/identite-visuelle": "/design-ui-ux",
};

function readSafe(p) { try { return fs.readFileSync(p); } catch { return null; } }

// HTML par route (pré-rendu). Fallback : index.html.
const HTML = {};
HTML["/"] = readSafe(path.join(__dirname, "index.html"));
for (const s of ROUTE_SLUGS) {
  HTML["/" + s] = readSafe(path.join(__dirname, s + ".html")) || HTML["/"];
}

const BUNDLE = readSafe(path.join(__dirname, "bundle.js"));
const OG = readSafe(path.join(__dirname, "og.png"));

const ROBOTS = `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`;
const SITEMAP =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  [""].concat(ROUTE_SLUGS).map(s => `  <url><loc>${BASE}/${s}</loc><changefreq>monthly</changefreq><priority>${s === "" ? "1.0" : "0.8"}</priority></url>`).join("\n") +
  `\n</urlset>\n`;

// Pré-compression gzip des ressources statiques
const gz = buf => (buf ? zlib.gzipSync(buf, { level: 8 }) : null);
const GZ = new WeakMap();
function gzipped(buf) {
  if (!buf) return null;
  if (!GZ.has(buf)) GZ.set(buf, gz(buf));
  return GZ.get(buf);
}
const BUNDLE_GZ = gzipped(BUNDLE);
const HTML_GZ = {}; for (const k in HTML) HTML_GZ[k] = gzipped(HTML[k]);
const ROBOTS_GZ = gz(Buffer.from(ROBOTS));
const SITEMAP_GZ = gz(Buffer.from(SITEMAP));

function send(req, res, body, type, cache, gzBody) {
  const wantsGzip = /\bgzip\b/.test(req.headers["accept-encoding"] || "") && gzBody;
  const headers = { "Content-Type": type, "Cache-Control": cache, "Vary": "Accept-Encoding" };
  if (wantsGzip) { headers["Content-Encoding"] = "gzip"; res.writeHead(200, headers); res.end(gzBody); }
  else { res.writeHead(200, headers); res.end(body); }
}

const server = http.createServer((req, res) => {
  // Domaine canonique : www.webgrowth.lu (l'apex webgrowth.lu redirige vers www via OVH).
  // Pas de redirection www→non-www ici, sinon boucle avec la redirection OVH.

  let url = (req.url || "/").split("?")[0];
  if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1); // sans slash final

  if (REDIRECTS[url]) {
    res.writeHead(301, { Location: BASE + REDIRECTS[url] });
    return res.end();
  }

  if (url === "/robots.txt")
    return send(req, res, ROBOTS, "text/plain; charset=utf-8", "public, max-age=86400", ROBOTS_GZ);
  if (url === "/sitemap.xml")
    return send(req, res, SITEMAP, "application/xml; charset=utf-8", "public, max-age=86400", SITEMAP_GZ);
  if (url === "/bundle.js" && BUNDLE)
    return send(req, res, BUNDLE, "application/javascript; charset=utf-8", "public, max-age=31536000, immutable", BUNDLE_GZ);
  if (url === "/og.png" && OG) {
    res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "public, max-age=604800" });
    return res.end(OG);
  }

  // Page pré-rendue correspondant à la route (sinon accueil)
  const html = HTML[url] || HTML["/"];
  const htmlGz = HTML_GZ[url] || HTML_GZ["/"];
  // no-cache : le HTML est revalidé à chaque visite (le bundle reste immutable via ?v=hash).
  // Garantit que les visiteurs reçoivent toujours la dernière version après un déploiement.
  send(req, res, html, "text/html; charset=utf-8", "no-cache", htmlGz);
});

server.listen(PORT, "0.0.0.0", () => console.log("Web Growth en ligne sur le port " + PORT));
