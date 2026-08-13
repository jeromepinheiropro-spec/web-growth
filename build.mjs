import { build } from "esbuild";
import { readFileSync, writeFileSync } from "fs";
import { PAGES } from "./src/pages.js";

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
const css = readFileSync("styles.css","utf8");

const BASE = "https://web-growth-production.up.railway.app";
const TITLE = "Web Growth — Agence de communication digitale à Luxembourg";
const DESC = "Web Growth transforme votre présence digitale en énergie pure : stratégie de marque, création, contenu, publicité et SEO, depuis le cœur du Luxembourg.";
const SOCIALS = [
  "https://www.instagram.com/webgrowth.lu",
  "https://www.linkedin.com/company/webgrowth-lu",
];

// Favicon SVG (éclair néon) en data-URI
const FAVICON = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#00E0FF'/><stop offset='.5' stop-color='#FF2D9B'/><stop offset='1' stop-color='#7A3BFF'/></linearGradient></defs><rect width='64' height='64' rx='14' fill='#0B0A12'/><path d='M36 6 16 36h12l-4 22 24-32H34z' fill='url(#g)'/></svg>`
);

// JSON-LD : entreprise, site, FAQ
const ld = [];
ld.push({
  "@context":"https://schema.org",
  "@type":"ProfessionalService",
  "name":"Web Growth",
  "description":DESC,
  "url":BASE+"/",
  "image":BASE+"/og.png",
  "email":"hello@webgrowth.lu",
  "areaServed":{"@type":"Country","name":"Luxembourg"},
  "address":{"@type":"PostalAddress","addressCountry":"LU","addressLocality":"Luxembourg"},
  "knowsAbout":["Communication digitale","SEO","Optimisation des conversions","Publicité en ligne","Community management","Stratégie de marque","Création de sites web"],
  "sameAs":SOCIALS,
});
ld.push({
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"Web Growth",
  "url":BASE+"/",
  "inLanguage":["fr","en","de"],
});
const faq = PAGES.fr["seo-conversion"].faq;
if(faq && faq.items){
  ld.push({
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": faq.items.map(it=>({
      "@type":"Question",
      "name":it.q,
      "acceptedAnswer":{"@type":"Answer","text":it.a},
    })),
  });
}
const ldTags = ld.map(o=>`<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${TITLE}</title>
<meta name="description" content="${DESC}"/>
<meta name="keywords" content="agence communication digitale Luxembourg, agence web Luxembourg, SEO Luxembourg, community management, publicité en ligne, création site internet, stratégie de marque"/>
<meta name="author" content="Web Growth"/>
<meta name="robots" content="index, follow, max-image-preview:large"/>
<meta name="theme-color" content="#0B0A12"/>
<link rel="canonical" href="${BASE}/"/>
<link rel="icon" href="${FAVICON}"/>
<link rel="apple-touch-icon" href="${FAVICON}"/>
<!-- Open Graph -->
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Web Growth"/>
<meta property="og:title" content="${TITLE}"/>
<meta property="og:description" content="${DESC}"/>
<meta property="og:url" content="${BASE}/"/>
<meta property="og:image" content="${BASE}/og.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:locale" content="fr_FR"/>
<meta property="og:locale:alternate" content="en_US"/>
<meta property="og:locale:alternate" content="de_DE"/>
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${TITLE}"/>
<meta name="twitter:description" content="${DESC}"/>
<meta name="twitter:image" content="${BASE}/og.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
${ldTags}
<style>${css}</style>
</head>
<body>
<div id="root"></div>
<script>${js}</script>
</body>
</html>`;

writeFileSync("index.html", html);
console.log("built index.html", (html.length/1024).toFixed(0)+"kb");
