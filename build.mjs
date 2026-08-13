import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { PAGES, SERVICE_ROUTES, SERVICE_LABELS } from "./src/pages.js";

/* 1) Bundle JS (externe, mis en cache) */
await build({
  entryPoints:["src/app.jsx"],
  bundle:true,
  minify:true,
  format:"iife",
  outfile:"dist/bundle.js",
  jsx:"automatic",
  loader:{".js":"jsx"},
  define:{"process.env.NODE_ENV":'"production"'},
});
const js = readFileSync("dist/bundle.js","utf8");
const cssRaw = readFileSync("styles.css","utf8");
/* Minification CSS (retire commentaires + espaces superflus) — pages plus légères */
const css = cssRaw
  .replace(/\/\*[\s\S]*?\*\//g,"")            // commentaires
  .replace(/\s*([{}:;,>~])\s*/g,"$1")          // espaces autour des séparateurs
  .replace(/;}/g,"}")                            // point-virgule final inutile
  .replace(/\s+/g," ")                          // espaces multiples
  .trim();
writeFileSync("bundle.js", js); // servi en externe (/bundle.js)

const BASE = "https://web-growth-production.up.railway.app";
const SITE = "Web Growth";
const HOME_TITLE = "Web Growth — Agence de communication digitale à Luxembourg";
const HOME_DESC = "Web Growth transforme votre présence digitale en énergie pure : stratégie de marque, création, contenu, publicité et SEO, depuis le cœur du Luxembourg.";
const SOCIALS = ["https://www.instagram.com/webgrowth.lu","https://www.linkedin.com/company/webgrowth-lu"];

const FAVICON = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#00E0FF'/><stop offset='.5' stop-color='#FF2D9B'/><stop offset='1' stop-color='#7A3BFF'/></linearGradient></defs><rect width='64' height='64' rx='14' fill='#0B0A12'/><path d='M36 6 16 36h12l-4 22 24-32H34z' fill='url(#g)'/></svg>`
);

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

/* Ordre & libellés des services (FR) pour la navigation + le contenu */
const NAV = [
  ["/", "Accueil"],
  ["/services", "Services"],
  ...SERVICE_ROUTES.map(r => ["/"+r, SERVICE_LABELS.fr[r]]),
  ["/objectifs", "Objectifs"],
];
const HOME_SERVICES = [
  {r:"strategie-de-marque", t:"Stratégie de marque", d:"Positionnement, plateforme de marque, ton de voix."},
  {r:"identite-visuelle",  t:"Identité visuelle & design", d:"Logo, charte, direction artistique."},
  {r:"creation-site-web",  t:"Création de site web", d:"Des sites rapides, beaux et pensés pour convertir."},
  {r:"reseaux-sociaux",    t:"Réseaux sociaux & contenu", d:"Ligne éditoriale, community management, contenu."},
  {r:"publicite-en-ligne", t:"Publicité en ligne", d:"Campagnes Meta, Google & TikTok à la performance."},
  {r:"video-motion",       t:"Vidéo & motion", d:"Reels, motion design et vidéos qui arrêtent le pouce."},
  {r:"seo-conversion",     t:"SEO & Conversion", d:"Être trouvé sur Google et transformer les visites en clients."},
];

const ROUTES = ["home","services",...SERVICE_ROUTES,"objectifs"];

function seoTitle(route){
  if(route==="home") return HOME_TITLE;
  if(route==="services") return "Services de communication digitale · Web Growth Luxembourg";
  if(route==="objectifs") return "Objectifs & résultats marketing · Web Growth Luxembourg";
  return `${SERVICE_LABELS.fr[route]} · ${SITE} Luxembourg`;
}
function clampDesc(s){
  s = String(s).replace(/\s+/g," ").trim();
  if(s.length<=158) return s;
  let cut = s.slice(0,155);
  cut = cut.slice(0, cut.lastIndexOf(" ")); // coupe au dernier mot entier
  return cut.replace(/[,;:.\s]+$/,"")+"…";
}
function seoDesc(route){
  if(route==="home") return clampDesc(HOME_DESC);
  const d = PAGES.fr[route];
  return clampDesc((d && d.intro) ? d.intro : HOME_DESC);
}
function canonical(route){ return BASE + (route==="home" ? "/" : "/"+route); }

/* Navigation commune (liens internes réels, vus par les robots sans JS) */
function navHtml(){
  return `<nav aria-label="Navigation principale">`+
    NAV.map(([href,label])=>`<a href="${href}">${esc(label)}</a>`).join("")+
    `<a href="/#contact">Démarrer un projet</a></nav>`;
}
function footerHtml(){
  return `<footer><p><strong>Web Growth</strong> — Agence de communication digitale à Luxembourg</p>`+
    `<p>hello@webgrowth.lu · Luxembourg</p>${navHtml()}</footer>`;
}
function listHtml(items){ return `<ul>`+items.map(i=>`<li>${esc(i)}</li>`).join("")+`</ul>`; }

/* Corps SEO pré-rendu par route (remplacé par React au chargement) */
function bodyHtml(route){
  let main = "";
  if(route==="home"){
    main = `<p class="eyebrow">Agence de communication digitale · Luxembourg</p>`+
      `<h1>De la com qui a du voltage</h1>`+
      `<p>${esc(HOME_DESC)}</p>`+
      `<h2>Nos services</h2><ul>`+
      HOME_SERVICES.map(s=>`<li><a href="/${s.r}"><strong>${esc(s.t)}</strong></a> — ${esc(s.d)}</li>`).join("")+
      `</ul>`+
      `<h2>Contact</h2><p>Un projet en tête ? Écrivez-nous à hello@webgrowth.lu — réponse rapide, depuis le Luxembourg.</p>`;
  } else if(route==="services"){
    const d = PAGES.fr.services;
    main = `<h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><ul>`+
      d.items.map(it=>`<li><a href="/${it.route}"><strong>${esc(it.h)}</strong></a> — ${esc(it.p)}</li>`).join("")+`</ul>`;
  } else if(route==="objectifs"){
    const d = PAGES.fr.objectifs;
    main = `<h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p>`+
      d.blocks.map(b=>`<h2>${esc(b.h)}</h2><p>${esc(b.p)}</p>${listHtml(b.items||[])}`).join("");
  } else {
    const d = PAGES.fr[route];
    main = `<h1>${esc(d.title)}</h1>`;
    if(d.valueProp) main += `<p><strong>${esc(d.valueProp)}</strong></p>`;
    main += `<p>${esc(d.intro)}</p>`;
    if(d.benefits) main += d.benefits.map(b=>`<h2>${esc(b.h)}</h2><p>${esc(b.p)}</p>`).join("");
    if(d.blocks) main += d.blocks.map(b=>`<h2>${esc(b.h)}</h2><p>${esc(b.p)}</p>${listHtml(b.items||[])}`).join("");
    if(d.included) main += `<h2>${esc(d.includedTitle||"Inclus")}</h2>${listHtml(d.included)}`;
    if(d.proof) main += `<h2>${esc(d.proof.title)}</h2>`+d.proof.items.map(it=>`<h3>${esc(it.h)}</h3><p>${esc(it.p)}</p>`).join("");
    if(d.method) main += `<h2>${esc(d.method.title)}</h2>`+d.method.steps.map(s=>`<h3>${esc(s.h)}</h3><p>${esc(s.p)}</p>`).join("");
    if(d.faq) main += `<h2>${esc(d.faq.title)}</h2>`+d.faq.items.map(f=>`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("");
    if(d.cta) main += `<p><a href="/#contact">${esc(d.cta.btn)}</a></p>`;
  }
  return `<div id="ssr-seo"><header><a href="/"><strong>Web Growth</strong></a>${navHtml()}</header><main>${main}</main>${footerHtml()}</div>`;
}

/* JSON-LD (global) */
const ldOrg = {"@context":"https://schema.org","@type":"ProfessionalService","name":"Web Growth","description":HOME_DESC,"url":BASE+"/","image":BASE+"/og.png","email":"hello@webgrowth.lu","areaServed":{"@type":"Country","name":"Luxembourg"},"address":{"@type":"PostalAddress","addressCountry":"LU","addressLocality":"Luxembourg"},"knowsAbout":["Communication digitale","SEO","Optimisation des conversions","Publicité en ligne","Community management","Stratégie de marque","Création de sites web","Vidéo & motion"],"sameAs":SOCIALS};
const ldSite = {"@context":"https://schema.org","@type":"WebSite","name":"Web Growth","url":BASE+"/","inLanguage":["fr","en","de"]};
const faq = PAGES.fr["seo-conversion"].faq;
const ldFaq = faq && faq.items ? {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.items.map(it=>({"@type":"Question","name":it.q,"acceptedAnswer":{"@type":"Answer","text":it.a}}))} : null;

function pageHtml(route){
  const title=seoTitle(route), desc=seoDesc(route), canon=canonical(route);
  const ld=[ldOrg,ldSite]; if(route==="seo-conversion" && ldFaq) ld.push(ldFaq);
  const ldTags = ld.map(o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("");
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}"/>
<meta name="keywords" content="agence communication digitale Luxembourg, agence web Luxembourg, SEO Luxembourg, community management, publicité en ligne, création site internet, stratégie de marque, vidéo motion"/>
<meta name="author" content="Web Growth"/>
<meta name="robots" content="index, follow, max-image-preview:large"/>
<meta name="theme-color" content="#0B0A12"/>
<link rel="canonical" href="${canon}"/>
<link rel="icon" href="${FAVICON}"/>
<link rel="apple-touch-icon" href="${FAVICON}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Web Growth"/>
<meta property="og:title" content="${esc(title)}"/>
<meta property="og:description" content="${esc(desc)}"/>
<meta property="og:url" content="${canon}"/>
<meta property="og:image" content="${BASE}/og.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:locale" content="fr_FR"/>
<meta property="og:locale:alternate" content="en_US"/>
<meta property="og:locale:alternate" content="de_DE"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(title)}"/>
<meta name="twitter:description" content="${esc(desc)}"/>
<meta name="twitter:image" content="${BASE}/og.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
${ldTags}
<style>${css}</style>
</head>
<body>
<div id="root">${bodyHtml(route)}</div>
<script src="/bundle.js" defer></script>
</body>
</html>`;
}

/* 2) Écrit un HTML pré-rendu par route (à plat, à la racine — déploiement simple) */
let total=0;
for(const route of ROUTES){
  const file = route==="home" ? "index.html" : `${route}.html`;
  const html = pageHtml(route);
  writeFileSync(file, html);
  total += html.length;
}
console.log(`built ${ROUTES.length} pages + bundle.js (${(js.length/1024).toFixed(0)}kb) · index.html ${(readFileSync("index.html","utf8").length/1024).toFixed(0)}kb`);
