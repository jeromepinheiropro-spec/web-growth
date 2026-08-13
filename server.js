// Serveur statique minimal (zéro dépendance) pour Railway / tout hébergeur Node.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const BASE = process.env.PUBLIC_URL || "https://web-growth-production.up.railway.app";
const ROUTES = [
  "",
  "services",
  "strategie-de-marque",
  "identite-visuelle",
  "creation-site-web",
  "reseaux-sociaux",
  "publicite-en-ligne",
  "video-motion",
  "seo-conversion",
  "objectifs",
];

const HTML = fs.readFileSync(path.join(__dirname, "index.html"));
const OG = fs.existsSync(path.join(__dirname, "og.png")) ? fs.readFileSync(path.join(__dirname, "og.png")) : null;

const ROBOTS = `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`;
const SITEMAP =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.map(r => `  <url><loc>${BASE}/${r}</loc><changefreq>monthly</changefreq><priority>${r === "" ? "1.0" : "0.8"}</priority></url>`).join("\n") +
  `\n</urlset>\n`;

const server = http.createServer((req, res) => {
  const url = (req.url || "/").split("?")[0];

  if (url === "/robots.txt") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" });
    return res.end(ROBOTS);
  }
  if (url === "/sitemap.xml") {
    res.writeHead(200, { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=86400" });
    return res.end(SITEMAP);
  }
  if (url === "/og.png" && OG) {
    res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "public, max-age=604800" });
    return res.end(OG);
  }

  // Site mono-page (routing côté client) : toutes les autres routes renvoient index.html
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=300",
  });
  res.end(HTML);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Web Growth en ligne sur le port " + PORT);
});
