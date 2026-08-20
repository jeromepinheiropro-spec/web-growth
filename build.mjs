import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { createHash } from "crypto";
import { PAGES, SERVICE_ROUTES, SERVICE_LABELS } from "./src/pages.js";
import { LEXIQUE } from "./src/lexique.js";

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
const jsHash = createHash("sha1").update(js).digest("hex").slice(0,8); // cache-busting

const BASE = "https://web-growth-production.up.railway.app";
const SITE = "Web Growth";
const HOME_TITLE = "Web Growth — Agence de communication digitale à Luxembourg";
const HOME_DESC = "Web Growth conçoit vos produits digitaux : développement logiciel et mobile, création web, design UI/UX, SEO et conseil IT, depuis le cœur du Luxembourg.";
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
  {r:"developpement-logiciel", t:"Développement logiciel sur mesure", d:"Plateformes, back-offices et API pensés pour la performance et l'échelle."},
  {r:"application-mobile",  t:"Développement d'application mobile", d:"Apps iOS & Android, natives ou cross-platform, fluides et fiables."},
  {r:"creation-site-web",  t:"Création de site web", d:"Des sites rapides, beaux et pensés pour convertir."},
  {r:"design-ui-ux",       t:"Design UI/UX & Branding", d:"Interfaces claires, design systems durables, du logo au produit."},
  {r:"seo-conversion",     t:"SEO & Conversion", d:"Être trouvé sur Google et transformer les visites en clients."},
  {r:"conseil-it",         t:"Conseil IT & Stratégie digitale", d:"Audit, architecture et feuille de route pour investir dans ce qui compte."},
];

const ROUTES = ["home","services",...SERVICE_ROUTES,"objectifs","lexique","test"];

function seoTitle(route){
  if(route==="home") return HOME_TITLE;
  if(route==="services") return "Services digitaux & développement · Web Growth Luxembourg";
  if(route==="objectifs") return "Objectifs & résultats marketing · Web Growth Luxembourg";
  if(route==="lexique") return "Lexique du web, du développement & des apps · Web Growth Luxembourg";
  if(route==="test") return "Test 3D · Web Growth Luxembourg";
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
  if(route==="lexique") return clampDesc(LEXIQUE.intro);
  if(route==="test") return "Section test : un cosmonaute en 3D interactif, dans l'univers spatial de Web Growth.";
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
    `<p>hello@webgrowth.lu · Luxembourg</p>${navHtml()}<p><a href="/lexique">Lexique du web &amp; du développement</a></p></footer>`;
}
function listHtml(items){ return `<ul>`+items.map(i=>`<li>${esc(i)}</li>`).join("")+`</ul>`; }

/* Corps SEO pré-rendu par route (remplacé par React au chargement) */
function bodyHtml(route){
  let main = "";
  if(route==="home"){
    main = `<p class="eyebrow">Agence de communication digitale · Luxembourg</p>`+
      `<h1>De la com qui a du punch</h1>`+
      `<p>${esc(HOME_DESC)}</p>`+
      `<h2>Nos services</h2><ul>`+
      HOME_SERVICES.map(s=>`<li><a href="/${s.r}"><strong>${esc(s.t)}</strong></a> — ${esc(s.d)}</li>`).join("")+
      `</ul>`+
      `<h2>Contact</h2><p>Un projet en tête ? Écrivez-nous à hello@webgrowth.lu — réponse rapide, depuis le Luxembourg.</p>`;
  } else if(route==="services"){
    const d = PAGES.fr.services;
    main = `<h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><ul>`+
      d.items.map(it=>`<li><a href="/${it.route}"><strong>${esc(it.h)}</strong></a> — ${esc(it.p)}</li>`).join("")+`</ul>`;
  } else if(route==="test"){
    main = `<h1>Cosmonaute 3D</h1><p>Section test : un modèle 3D interactif dans l'univers spatial de Web Growth.</p>`;
  } else if(route==="lexique"){
    main = `<h1>${esc(LEXIQUE.title)}</h1><p>${esc(LEXIQUE.intro)}</p>`+
      LEXIQUE.groups.map(g=>`<h2>${esc(g.cat)}</h2><dl>`+
        g.items.map(it=>`<dt>${esc(it.t)}</dt><dd>${esc(it.d)}</dd>`).join("")+`</dl>`).join("");
  } else if(route==="objectifs"){
    const d = PAGES.fr.objectifs;
    main = `<h1>${esc(d.title)}</h1>`+
      (d.lead?`<p><strong>${esc(d.lead)}</strong></p>`:"")+
      (d.context?`<p>${esc(d.context)}</p>`:"")+
      `<p>${esc(d.intro)}</p>`+
      d.blocks.map(b=>`<h2>${esc(b.h)}</h2><p>${esc(b.p)}</p>${listHtml(b.items||[])}`).join("");
  } else {
    const d = PAGES.fr[route];
    main = `<h1>${esc(d.title)}</h1>`;
    if(d.valueProp) main += `<p><strong>${esc(d.valueProp)}</strong></p>`;
    main += `<p>${esc(d.intro)}</p>`;
    if(d.lead) main += `<p><strong>${esc(d.lead)}</strong></p>`;
    if(d.context) main += `<p>${esc(d.context)}</p>`;
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
const ldOrg = {"@context":"https://schema.org","@type":"ProfessionalService","name":"Web Growth","description":HOME_DESC,"url":BASE+"/","image":BASE+"/og.png","email":"hello@webgrowth.lu","areaServed":{"@type":"Country","name":"Luxembourg"},"address":{"@type":"PostalAddress","addressCountry":"LU","addressLocality":"Luxembourg"},"knowsAbout":["Développement logiciel sur mesure","Développement d'application mobile","Création de sites web","Design UI/UX & branding","SEO","Optimisation des conversions","Conseil IT & stratégie digitale"],"sameAs":SOCIALS};
const ldSite = {"@context":"https://schema.org","@type":"WebSite","name":"Web Growth","url":BASE+"/","inLanguage":["fr","en","de"]};
const faq = PAGES.fr["seo-conversion"].faq;
const ldFaq = faq && faq.items ? {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.items.map(it=>({"@type":"Question","name":it.q,"acceptedAnswer":{"@type":"Answer","text":it.a}}))} : null;

function pageHtml(route){
  const title=seoTitle(route), desc=seoDesc(route), canon=canonical(route);
  const ld=[ldOrg,ldSite]; if(route==="seo-conversion" && ldFaq) ld.push(ldFaq);
  if(route==="lexique") ld.push({"@context":"https://schema.org","@type":"DefinedTermSet","name":LEXIQUE.title,"url":BASE+"/lexique","hasDefinedTerm":LEXIQUE.groups.flatMap(g=>g.items.map(it=>({"@type":"DefinedTerm","name":it.t,"description":it.d,"inDefinedTermSet":BASE+"/lexique"})))});
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
<meta name="robots" content="${route==="test"?"noindex, nofollow":"index, follow, max-image-preview:large"}"/>
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
<script src="/bundle.js?v=${jsHash}" defer></script>
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
