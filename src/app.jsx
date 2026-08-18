import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion";
import { initWaterReveal } from "./water-reveal.js";
import revealImg from "./revealImg.js";
import Lenis from "lenis";
import VanillaTilt from "vanilla-tilt";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import confetti from "canvas-confetti";
import { PAGES, SERVICE_ROUTES, SERVICE_LABELS } from "./pages.js";

/* ============================ ANIMATED HERO BG (WebGL plasma néon) ============================ */
// Détection appareil faible : on coupe les effets GPU lourds (WebGL, particules, flous animés)
let _lowFX=null;
function lowFX(){
  if(_lowFX!==null) return _lowFX;
  try{
    if(typeof window==="undefined"){ _lowFX=false; return _lowFX; }
    const rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cores=navigator.hardwareConcurrency||8;
    const mem=navigator.deviceMemory||8;
    _lowFX = !!(rm || cores<=4 || mem<=4);
  }catch(_){ _lowFX=false; }
  return _lowFX;
}
function AnimatedHeroBG(){
  const ref=useRef(null);
  useEffect(()=>{
    const canvas=ref.current; if(!canvas) return;
    if(lowFX()){ canvas.style.display="none"; return; }   // appareil faible → dégradé statique CSS
    const gl=canvas.getContext("webgl")||canvas.getContext("experimental-webgl");
    if(!gl){ canvas.style.display="none"; return; }
    const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}`;
    const fs=`precision mediump float;uniform vec2 u_res;uniform float u_time;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1.,0.)),c=hash(i+vec2(0.,1.)),d=hash(i+vec2(1.,1.));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<3;i++){v+=a*noise(p);p*=2.02;a*=.5;}return v;}
      void main(){
        vec2 uv=gl_FragCoord.xy/u_res.xy;
        vec2 p=uv*vec2(u_res.x/u_res.y,1.0)*2.6;
        float t=u_time*0.06;
        float n=fbm(p+vec2(t,-t*0.7));
        vec3 base=vec3(0.03,0.02,0.08);
        vec3 vio=vec3(0.30,0.12,0.75), cya=vec3(0.0,0.75,1.0), mag=vec3(1.0,0.15,0.55);
        vec3 col=mix(base,vio,smoothstep(0.25,0.75,n));
        col=mix(col,cya,smoothstep(0.5,0.95,fbm(p*1.1+t*1.2))*0.5);
        col=mix(col,mag,smoothstep(0.62,1.0,n)*0.45);
        col*=1.0-0.55*length(uv-0.5);
        gl_FragColor=vec4(col,1.0);
      }`;
    function sh(t,s){const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;}
    const prog=gl.createProgram();gl.attachShader(prog,sh(gl.VERTEX_SHADER,vs));gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(prog);gl.useProgram(prog);
    const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const loc=gl.getAttribLocation(prog,"p");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
    const uRes=gl.getUniformLocation(prog,"u_res"),uTime=gl.getUniformLocation(prog,"u_time");
    const SCALE=0.6;                                       // rendu basse résolution (plasma flou → invisible à l'œil)
    function resize(){const dpr=Math.min(window.devicePixelRatio||1,1)*SCALE;const w=Math.max(2,Math.round(canvas.clientWidth*dpr)),h=Math.max(2,Math.round(canvas.clientHeight*dpr));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}}
    resize();window.addEventListener("resize",resize);
    let raf,start=null,destroyed=false,visible=true,last=0,drawn=0,probe=null,io=null;
    function teardown(fallback){ if(destroyed)return; destroyed=true; cancelAnimationFrame(raf); if(io)io.disconnect(); window.removeEventListener("resize",resize); const lc=gl.getExtension("WEBGL_lose_context"); if(lc)lc.loseContext(); if(fallback){ canvas.style.display="none"; try{document.body.classList.add("lowfx");}catch(_){} } }
    try{ io=new IntersectionObserver(es=>{visible=es[0].isIntersecting; if(!visible)probe=null;},{threshold:0}); io.observe(canvas); }catch(_){}
    function frame(ts){ if(destroyed)return; raf=requestAnimationFrame(frame);
      if(!visible) return;                                 // pause quand le hero est hors écran
      if(ts-last<32) return;                               // plafonné ~30 fps
      last=ts; if(!start){start=ts;probe=ts;}
      gl.uniform2f(uRes,canvas.width,canvas.height);gl.uniform1f(uTime,(ts-start)/1000);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);drawn++;
      if(probe!==null && ts-probe>900){ const f=drawn/((ts-probe)/1000); probe=null; if(f<20){ teardown(true); } } // GPU trop lent → dégradé statique
    }
    raf=requestAnimationFrame(frame);
    return()=>teardown(false);
  },[]);
  return <canvas ref={ref} className="hero-plasma"/>;
}

/* ============================ SCRAMBLE TEXT ============================ */
const _SCHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/\\<>*";
function ScrambleText({text,className,as:Tag="span"}){
  // Animation de « décryptage » retirée — titres affichés en clair, fondu doux via CSS.
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-60px"});
  return <Tag ref={ref} className={`${className||""} rise ${inView?"in":""}`}>{text}</Tag>;
}

/* ============================ PRELOADER (intro cinématique) ============================ */
function Preloader({onDone}){
  const [pct,setPct]=useState(0);
  const [logo,setLogo]=useState("WEB GROWTH");
  const [gone,setGone]=useState(false);
  useEffect(()=>{
    const T="WEB GROWTH";const DUR=1100;let startTs=null;let raf;
    const tick=ts=>{
      if(startTs==null)startTs=ts;
      const prog=Math.min(1,(ts-startTs)/DUR);
      setPct(Math.round(prog*100));
      let s="";for(let i=0;i<T.length;i++){const ch=T[i];if(ch===" "){s+=" ";continue;}s+= (i/T.length<prog)?ch:_SCHARS[Math.floor((Math.sin(ts*0.03+i*4.3)*.5+.5)*_SCHARS.length)];}
      setLogo(s);
      if(prog<1)raf=requestAnimationFrame(tick);
      else{setLogo(T);setTimeout(()=>{setGone(true);setTimeout(onDone,450);},180);}
    };
    raf=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf);
  },[onDone]);
  return(
    <motion.div className={`preloader ${gone?"gone":""}`} initial={{opacity:1}}>
      <div className="pre-inner">
        <div className="pre-logo">{logo}</div>
        <div className="pre-bar"><span style={{width:pct+"%"}}/></div>
        <div className="pre-meta"><span>// SYSTEM BOOT</span><span>{pct}%</span></div>
      </div>
      <div className="pre-wipe"/>
    </motion.div>
  );
}

/* ============================ EFFECTS: PARTICLES ============================ */
let _tsLoaded=false;
async function ensureTs(){ if(!_tsLoaded){ await loadSlim(tsParticles); _tsLoaded=true; } }
function Particles({id}){
  useEffect(()=>{
    if(lowFX()) return;                                    // appareil faible → pas de particules
    let inst,cancelled=false;
    (async()=>{ await ensureTs(); if(cancelled)return;
      inst=await tsParticles.load({id,options:{
        fullScreen:{enable:false},background:{color:"transparent"},fpsLimit:30,detectRetina:true,
        particles:{
          number:{value:70,density:{enable:true,area:900}},
          color:{value:["#00E0FF","#FF2D9B","#7A3BFF","#C9FF3B"]},
          links:{enable:true,color:"#7A3BFF",distance:150,opacity:.3,width:1},
          move:{enable:true,speed:.9,outModes:{default:"bounce"}},
          size:{value:{min:1,max:3}},opacity:{value:{min:.3,max:.7}},
        },
        interactivity:{events:{onHover:{enable:true,mode:"grab"},onClick:{enable:true,mode:"push"}},
          modes:{grab:{distance:170,links:{opacity:.6}},push:{quantity:3}}},
      }});
    })();
    return()=>{cancelled=true;if(inst)inst.destroy();};
  },[id]);
  return <div id={id} className="particles-layer"/>;
}

const BRAND = "Web Growth";

/* ============================ I18N ============================ */
const I18N = {
 fr:{
  nav_services:"Services",nav_objectifs:"Objectifs",nav_seo:"SEO & Conversion",nav_all_services:"Tous nos services",nav_work:"Réalisations",nav_approach:"Approche",nav_contact:"Contact",nav_cta:"Démarrer un projet",
  hero_eyebrow:"Agence de communication digitale · Luxembourg",
  hero_l1:"De la com",hero_l2:"qui a du",
  hero_sub:"Web Growth transforme votre présence digitale en énergie pure — stratégie, création, contenu et publicité, depuis le cœur du Luxembourg.",
  hero_cta1:"Démarrer un projet",hero_cta2:"Voir nos réalisations",scroll:"Défiler",
  man_tag:"Le manifeste",
  man_big:"On ne fait pas du contenu pour faire joli. On crée des marques qu'on n'oublie pas.",
  man_hi:["joli.","qu'on","n'oublie","pas."],
  svc_tag:"Nos services",svc_title:"Tout pour rayonner en ligne",svc_discover:"Découvrir",swipe:"Défilez →",
  app_tag:"Notre approche",app_title:"Simple, rapide, redoutable",app_intro:"Une méthode en quatre temps, pensée pour aller vite sans jamais sacrifier la qualité.",
  work_tag:"Réalisations",work_title:"Des projets qui claquent",work_intro:"Un aperçu du type de projets qu'on adore mener. Remplacez ces exemples par vos propres études de cas.",
  cli_lab:"Ils pourraient briller à vos côtés",
  con_tag:"Contact",con_a:"On lance ",con_em:"votre projet",con_b:" ?",
  con_lead:"Dites-nous où vous en êtes et où vous voulez aller. On revient vers vous sous 48h avec des idées concrètes.",
  con_loc:"Luxembourg-Ville, Luxembourg",
  f_name:"Nom",f_email:"Email",f_need:"Votre besoin",f_msg:"Message",f_send:"Envoyer la fusée 🚀",f_note:"En cliquant, votre messagerie s'ouvre avec le message prérempli.",
  foot_rights:"Tous droits réservés.",foot_made:"⚡ Conçu avec énergie au Luxembourg",foot_legal:"Mentions légales",foot_privacy:"Confidentialité",
  rotator:["punch","peps","style","mordant","panache","caractère"]
 },
 en:{
  nav_services:"Services",nav_objectifs:"Goals",nav_seo:"SEO & Conversion",nav_all_services:"All services",nav_work:"Work",nav_approach:"Approach",nav_contact:"Contact",nav_cta:"Start a project",
  hero_eyebrow:"Digital communication agency · Luxembourg",
  hero_l1:"Marketing",hero_l2:"with real",
  hero_sub:"Web Growth turns your digital presence into pure energy — strategy, creative, content and advertising, from the heart of Luxembourg.",
  hero_cta1:"Start a project",hero_cta2:"See our work",scroll:"Scroll",
  man_tag:"The manifesto",
  man_big:"We don't make content just to look nice. We build brands you won't forget.",
  man_hi:["nice.","you","won't","forget."],
  svc_tag:"Our services",svc_title:"Everything to shine online",svc_discover:"Discover",swipe:"Scroll →",
  app_tag:"Our approach",app_title:"Simple, fast, relentless",app_intro:"A four-step method built to move fast without ever cutting corners on quality.",
  work_tag:"Work",work_title:"Projects that pop",work_intro:"A taste of the kind of work we love to run. Swap these examples for your own case studies.",
  cli_lab:"They could shine beside you",
  con_tag:"Contact",con_a:"Let's launch ",con_em:"your project",con_b:"?",
  con_lead:"Tell us where you are and where you want to go. We'll get back to you within 48h with concrete ideas.",
  con_loc:"Luxembourg City, Luxembourg",
  f_name:"Name",f_email:"Email",f_need:"What you need",f_msg:"Message",f_send:"Launch the rocket 🚀",f_note:"On click, your mail app opens with the message pre-filled.",
  foot_rights:"All rights reserved.",foot_made:"⚡ Crafted with energy in Luxembourg",foot_legal:"Legal notice",foot_privacy:"Privacy",
  rotator:["punch","energy","spark","edge","drive"]
 },
 de:{
  nav_services:"Leistungen",nav_objectifs:"Ziele",nav_seo:"SEO & Conversion",nav_all_services:"Alle Leistungen",nav_work:"Projekte",nav_approach:"Ansatz",nav_contact:"Kontakt",nav_cta:"Projekt starten",
  hero_eyebrow:"Agentur für digitale Kommunikation · Luxemburg",
  hero_l1:"Marketing",hero_l2:"mit echtem",
  hero_sub:"Web Growth verwandelt deine digitale Präsenz in reine Energie — Strategie, Kreation, Content und Werbung, aus dem Herzen Luxemburgs.",
  hero_cta1:"Projekt starten",hero_cta2:"Unsere Projekte",scroll:"Scrollen",
  man_tag:"Das Manifest",
  man_big:"Wir machen Content nicht, damit es hübsch aussieht. Wir bauen Marken, die man nicht vergisst.",
  man_hi:["hübsch","die","man","vergisst."],
  svc_tag:"Unsere Leistungen",svc_title:"Alles, um online zu glänzen",svc_discover:"Entdecken",swipe:"Scrollen →",
  app_tag:"Unser Ansatz",app_title:"Einfach, schnell, kompromisslos",app_intro:"Eine Methode in vier Schritten, gebaut für Tempo — ohne je bei der Qualität Abstriche zu machen.",
  work_tag:"Projekte",work_title:"Projekte, die knallen",work_intro:"Ein Vorgeschmack auf die Art von Projekten, die wir lieben. Ersetze diese Beispiele durch deine eigenen Case Studies.",
  cli_lab:"Sie könnten an deiner Seite glänzen",
  con_tag:"Kontakt",con_a:"Starten wir ",con_em:"dein Projekt",con_b:"?",
  con_lead:"Sag uns, wo du stehst und wohin du willst. Wir melden uns innerhalb von 48h mit konkreten Ideen.",
  con_loc:"Luxemburg-Stadt, Luxemburg",
  f_name:"Name",f_email:"E-Mail",f_need:"Dein Bedarf",f_msg:"Nachricht",f_send:"Rakete starten 🚀",f_note:"Beim Klick öffnet sich dein Mailprogramm mit der vorausgefüllten Nachricht.",
  foot_rights:"Alle Rechte vorbehalten.",foot_made:"⚡ Mit Energie in Luxemburg gestaltet",foot_legal:"Impressum",foot_privacy:"Datenschutz",
  rotator:["punch","biss","drive","schwung","feuer","funken"]
 }
};

const SVG={
 strat:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>),
 design:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/></svg>),
 social:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/></svg>),
 ads:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><path d="M3 11v2a1 1 0 001 1h3l4 4V6L7 10H4a1 1 0 00-1 1z"/><path d="M16 9a4 4 0 010 6M19 6a8 8 0 010 12"/></svg>),
 web:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 21h10"/></svg>),
 video:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><rect x="3" y="5" width="14" height="14" rx="2"/><path d="M17 9l4-2v10l-4-2"/></svg>),
 seo:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/><path d="M8.5 12l2-2 1.5 1.5 2.5-3"/></svg>),
 code:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/></svg>),
 mobile:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><rect x="7" y="3" width="10" height="18" rx="2.2"/><path d="M11 18h2"/></svg>),
 ui:(c)=>(<svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></svg>),
};
const SERVICES={
 fr:[{i:'code',c:'c1',route:'developpement-logiciel',t:"Développement logiciel",d:"Plateformes, back-offices et API sur mesure, pensés pour la performance et l'échelle.",tags:["Web app","API","Sur mesure"]},
     {i:'mobile',c:'c2',route:'application-mobile',t:"Application mobile",d:"Apps iOS & Android, natives ou cross-platform, fluides et fiables.",tags:["iOS","Android","React Native"]},
     {i:'web',c:'c3',route:'creation-site-web',t:"Création de site web",d:"Sites, landing pages, e-commerce. Rapides, beaux, pensés pour convertir.",tags:["Web","E-commerce","SEO"]},
     {i:'ui',c:'c4',route:'design-ui-ux',t:"Design UI/UX & Branding",d:"Interfaces claires, design systems durables, du logo au produit.",tags:["UI/UX","Design system","Figma"]},
     {i:'seo',c:'c6',route:'seo-conversion',t:"SEO & Conversion",d:"Être trouvé sur Google et transformer les visites en clients.",tags:["SEO","Local","CRO"]},
     {i:'strat',c:'c1',route:'conseil-it',t:"Conseil IT & Stratégie",d:"Audit, architecture et feuille de route pour investir dans ce qui compte.",tags:["Audit","Architecture","Roadmap"]}],
 en:[{i:'code',c:'c1',route:'developpement-logiciel',t:"Custom software",d:"Tailor-made platforms, back-offices and APIs engineered for performance and scale.",tags:["Web app","API","Bespoke"]},
     {i:'mobile',c:'c2',route:'application-mobile',t:"Mobile apps",d:"iOS & Android apps, native or cross-platform, smooth and reliable.",tags:["iOS","Android","React Native"]},
     {i:'web',c:'c3',route:'creation-site-web',t:"Website creation",d:"Sites, landing pages, e-commerce. Fast, beautiful, built to convert.",tags:["Web","E-commerce","SEO"]},
     {i:'ui',c:'c4',route:'design-ui-ux',t:"UI/UX & Branding",d:"Clean interfaces, lasting design systems, from logo to product.",tags:["UI/UX","Design system","Figma"]},
     {i:'seo',c:'c6',route:'seo-conversion',t:"SEO & Conversion",d:"Get found on Google and turn visits into customers.",tags:["SEO","Local","CRO"]},
     {i:'strat',c:'c1',route:'conseil-it',t:"IT consulting & strategy",d:"Audit, architecture and roadmap to invest in what truly matters.",tags:["Audit","Architecture","Roadmap"]}],
 de:[{i:'code',c:'c1',route:'developpement-logiciel',t:"Softwareentwicklung",d:"Maßgeschneiderte Plattformen, Back-Offices und APIs für Performance und Skalierung.",tags:["Web-App","API","Maßarbeit"]},
     {i:'mobile',c:'c2',route:'application-mobile',t:"Mobile Apps",d:"iOS- & Android-Apps, nativ oder cross-platform, flüssig und zuverlässig.",tags:["iOS","Android","React Native"]},
     {i:'web',c:'c3',route:'creation-site-web',t:"Website-Erstellung",d:"Sites, Landingpages, E-Commerce. Schnell, schön, auf Conversion gebaut.",tags:["Web","E-Commerce","SEO"]},
     {i:'ui',c:'c4',route:'design-ui-ux',t:"UI/UX & Branding",d:"Klare Interfaces, langlebige Design-Systeme, vom Logo bis zum Produkt.",tags:["UI/UX","Design-System","Figma"]},
     {i:'seo',c:'c6',route:'seo-conversion',t:"SEO & Conversion",d:"Bei Google gefunden werden und Besuche in Kunden verwandeln.",tags:["SEO","Local","CRO"]},
     {i:'strat',c:'c1',route:'conseil-it',t:"IT-Beratung & Strategie",d:"Audit, Architektur und Roadmap, um ins Richtige zu investieren.",tags:["Audit","Architektur","Roadmap"]}]
};
const STEPS={
 fr:[{n:"01",t:"Écoute",d:"On plonge dans votre univers, vos objectifs et votre audience."},
     {n:"02",t:"Stratégie",d:"Un plan clair : message, canaux, calendrier et indicateurs."},
     {n:"03",t:"Création",d:"Des contenus et designs qui sortent du lot et servent la stratégie."},
     {n:"04",t:"Amplification",d:"On lance, on mesure, on optimise. Les résultats guident tout."}],
 en:[{n:"01",t:"Listen",d:"We dive into your world, your goals and your audience."},
     {n:"02",t:"Strategy",d:"A clear plan: message, channels, calendar and metrics."},
     {n:"03",t:"Create",d:"Content and design that stand out and serve the strategy."},
     {n:"04",t:"Amplify",d:"We launch, measure, optimise. Results drive everything."}],
 de:[{n:"01",t:"Zuhören",d:"Wir tauchen in deine Welt, Ziele und Zielgruppe ein."},
     {n:"02",t:"Strategie",d:"Ein klarer Plan: Botschaft, Kanäle, Kalender, Kennzahlen."},
     {n:"03",t:"Kreation",d:"Content und Design, das auffällt und der Strategie dient."},
     {n:"04",t:"Amplify",d:"Launchen, messen, optimieren. Ergebnisse steuern alles."}]
};
const STATS={
 fr:[{v:3,s:"",l:"langues de travail"},{v:48,s:"h",l:"délai de réponse"},{v:100,s:"%",l:"sur-mesure"},{v:null,s:"∞",l:"idées en réserve"}],
 en:[{v:3,s:"",l:"working languages"},{v:48,s:"h",l:"response time"},{v:100,s:"%",l:"tailor-made"},{v:null,s:"∞",l:"ideas in reserve"}],
 de:[{v:3,s:"",l:"Arbeitssprachen"},{v:48,s:"h",l:"Reaktionszeit"},{v:100,s:"%",l:"maßgeschneidert"},{v:null,s:"∞",l:"Ideen in Reserve"}]
};
const PROJECTS={
 fr:[{k:'p1',cls:'wide tall',cat:"Branding · Web",t:"Lumen Studio",d:"Refonte complète d'identité et site vitrine pour un studio créatif."},
     {k:'p2',cls:'tall',cat:"Réseaux sociaux",t:"Café Kiosk",d:"Ligne éditoriale et contenu qui a triplé la communauté."},
     {k:'p3',cls:'',cat:"Publicité",t:"FinFlow",d:"Campagne d'acquisition Meta & Google."},
     {k:'p4',cls:'',cat:"Vidéo · Motion",t:"Nova Fest",d:"Aftermovie et série de reels événementiels."},
     {k:'p5',cls:'wide',cat:"E-commerce",t:"Maison Éclat",d:"Boutique en ligne et stratégie de contenu pour une marque lifestyle."}],
 en:[{k:'p1',cls:'wide tall',cat:"Branding · Web",t:"Lumen Studio",d:"Full identity redesign and showcase site for a creative studio."},
     {k:'p2',cls:'tall',cat:"Social media",t:"Café Kiosk",d:"Editorial line and content that tripled the community."},
     {k:'p3',cls:'',cat:"Advertising",t:"FinFlow",d:"Meta & Google acquisition campaign."},
     {k:'p4',cls:'',cat:"Video · Motion",t:"Nova Fest",d:"Aftermovie and a series of event reels."},
     {k:'p5',cls:'wide',cat:"E-commerce",t:"Maison Éclat",d:"Online store and content strategy for a lifestyle brand."}],
 de:[{k:'p1',cls:'wide tall',cat:"Branding · Web",t:"Lumen Studio",d:"Komplettes Identity-Redesign und Showcase-Website für ein Kreativstudio."},
     {k:'p2',cls:'tall',cat:"Social Media",t:"Café Kiosk",d:"Redaktionslinie und Content, der die Community verdreifacht hat."},
     {k:'p3',cls:'',cat:"Werbung",t:"FinFlow",d:"Meta- & Google-Akquisekampagne."},
     {k:'p4',cls:'',cat:"Video · Motion",t:"Nova Fest",d:"Aftermovie und eine Reihe von Event-Reels."},
     {k:'p5',cls:'wide',cat:"E-Commerce",t:"Maison Éclat",d:"Online-Shop und Content-Strategie für eine Lifestyle-Marke."}]
};
const KEYWORDS=["Branding","Réseaux sociaux","Publicité","Web","Motion","SEO","Content","Stratégie","E-commerce","Direction artistique"];
const CLIENTS=["VOTRE MARQUE","STARTUP","PME","E-SHOP","RESTAURANT","IMMOBILIER","B2B","LIFESTYLE"];

/* ============================ GLOW CURSOR ============================ */
function GlowCursor(){
  const mx=useMotionValue(-100),my=useMotionValue(-100);
  useEffect(()=>{const m=e=>{mx.set(e.clientX);my.set(e.clientY)};window.addEventListener("mousemove",m);return()=>window.removeEventListener("mousemove",m)},[mx,my]);
  const halo={x:useSpring(mx,{stiffness:140,damping:20,mass:.7}),y:useSpring(my,{stiffness:140,damping:20,mass:.7})};
  const dot={x:useSpring(mx,{stiffness:1200,damping:50}),y:useSpring(my,{stiffness:1200,damping:50})};
  const trails=[
    {stiff:260,damp:22,size:9,c:"rgba(255,45,155,.9)"},
    {stiff:180,damp:20,size:8,c:"rgba(122,59,255,.8)"},
    {stiff:120,damp:18,size:7,c:"rgba(0,224,255,.75)"},
    {stiff:80,damp:16,size:5,c:"rgba(201,255,59,.6)"},
  ];
  return(<>
    <motion.div className="glow-halo" style={{x:halo.x,y:halo.y}}/>
    {trails.map((t,i)=><Trail key={i} mx={mx} my={my} {...t}/>)}
    <motion.div className="glow-dot" style={{x:dot.x,y:dot.y}}/>
  </>);
}
function Trail({mx,my,stiff,damp,size,c}){
  const x=useSpring(mx,{stiffness:stiff,damping:damp}),y=useSpring(my,{stiffness:stiff,damping:damp});
  return <motion.div className="glow-trail" style={{x,y,width:size,height:size,background:c,boxShadow:`0 0 10px ${c}`}}/>;
}

/* ============================ ROUTING (chemins réels) ============================ */
const ROUTES=[...SERVICE_ROUTES,"services","objectifs"];
function parseRoute(){const p=(window.location.pathname||"/").replace(/^\/+|\/+$/g,"").trim();return ROUTES.includes(p)?p:"home";}
function goPage(r){
  const path = r==="home" ? "/" : "/"+r;
  if(window.location.pathname!==path){window.history.pushState({},"",path);}
  window.dispatchEvent(new PopStateEvent("popstate"));
}
const LOC={fr:"Luxembourg",en:"Luxembourg",de:"Luxemburg"};
const SEO_FIXED={
  home:{fr:"Web Growth — Agence de communication digitale à Luxembourg",en:"Web Growth — Digital communication agency in Luxembourg",de:"Web Growth — Agentur für digitale Kommunikation in Luxemburg"},
  services:{fr:"Services digitaux & développement · Web Growth Luxembourg",en:"Digital & development services · Web Growth Luxembourg",de:"Digital- & Entwicklungsleistungen · Web Growth Luxemburg"},
  objectifs:{fr:"Objectifs & résultats marketing · Web Growth Luxembourg",en:"Marketing goals & results · Web Growth Luxembourg",de:"Marketingziele & Ergebnisse · Web Growth Luxemburg"},
};
function seoTitle(route,lang){
  if(SEO_FIXED[route]) return SEO_FIXED[route][lang];
  const label=(SERVICE_LABELS[lang]&&SERVICE_LABELS[lang][route])||route;
  return `${label} · Web Growth ${LOC[lang]}`;
}
const HOME_DESC={fr:"Web Growth conçoit vos produits digitaux : développement logiciel et mobile, création web, design UI/UX, SEO et conseil IT, depuis le cœur du Luxembourg.",en:"Web Growth builds your digital products: custom software and mobile, web, UI/UX design, SEO and IT consulting, from the heart of Luxembourg.",de:"Web Growth entwickelt Ihre digitalen Produkte: Software und Mobile, Web, UI/UX-Design, SEO und IT-Beratung, aus dem Herzen Luxemburgs."};

function scrollToId(id){
  const el=document.getElementById(id);
  if(!el){ // probablement sur une sous-page → retour accueil puis scroll
    if(parseRoute()!=="home"){goPage("home");setTimeout(()=>scrollToId(id),200);}
    return;
  }
  if(window.__lenis)window.__lenis.scrollTo(el,{offset:-64,duration:1.1});
  else el.scrollIntoView({behavior:"smooth"});}

/* ============================ BRAND (header logo) ============================ */
function Brand(){
  return(
    <a className="brand" href="/" onClick={e=>{e.preventDefault();if(parseRoute()!=="home"){goPage("home");}else if(window.__lenis)window.__lenis.scrollTo(0,{duration:1});else window.scrollTo({top:0,behavior:"smooth"})}}>
      <span className="brand-word" data-txt="WEB GROWTH">WEB GROWTH</span>
      <span className="brand-tag">.LU</span>
    </a>
  );
}

/* ============================ CUSTOM CURSOR ============================ */
function CustomCursor(){
  const mx=useMotionValue(-100),my=useMotionValue(-100);
  const [hover,setHover]=useState(false);
  useEffect(()=>{
    const m=e=>{mx.set(e.clientX);my.set(e.clientY);
      const t=e.target;
      setHover(!!(t&&t.closest&&t.closest("a,button,input,textarea,select,.hcard,.proj,.sc-item,.lang button,.drop,.post,.gal-item")));
    };
    window.addEventListener("mousemove",m);return()=>window.removeEventListener("mousemove",m);
  },[mx,my]);
  const rx=useSpring(mx,{stiffness:220,damping:24,mass:.5}),ry=useSpring(my,{stiffness:220,damping:24,mass:.5});
  const dx=useSpring(mx,{stiffness:1300,damping:55}),dy=useSpring(my,{stiffness:1300,damping:55});
  return(<>
    <motion.div className="cur-ring" style={{x:rx,y:ry}} animate={{scale:hover?2:1,opacity:1}} transition={{type:"spring",stiffness:260,damping:20}}/>
    <motion.div className="cur-dot" style={{x:dx,y:dy}} animate={{scale:hover?0:1}} transition={{type:"spring",stiffness:260,damping:20}}/>
  </>);
}

/* ============================ MAGNETIC ============================ */
function Magnetic({children,className,...rest}){
  const ref=useRef(null);const x=useMotionValue(0),y=useMotionValue(0);
  const sx=useSpring(x,{stiffness:250,damping:18}),sy=useSpring(y,{stiffness:250,damping:18});
  return(<motion.a ref={ref} onMouseMove={e=>{const r=ref.current.getBoundingClientRect();x.set((e.clientX-(r.left+r.width/2))*0.3);y.set((e.clientY-(r.top+r.height/2))*0.4)}}
    onMouseLeave={()=>{x.set(0);y.set(0)}} style={{x:sx,y:sy,display:"inline-flex"}} className={className} {...rest}>{children}</motion.a>);
}

/* ============================ HEADER ============================ */
function Header({lang,setLang,t}){
  const [solid,setSolid]=useState(false),[spot,setSpot]=useState(false),[open,setOpen]=useState(false);
  const sx=useMotionValue(0),sy=useMotionValue(0);
  useEffect(()=>{const s=()=>setSolid(window.scrollY>40);window.addEventListener("scroll",s);return()=>window.removeEventListener("scroll",s)},[]);
  useEffect(()=>{document.body.classList.toggle("menu-open",open)},[open]);
  const go=id=>{setOpen(false);scrollToId(id)};
  const page=(e,r)=>{if(e)e.preventDefault();setOpen(false);goPage(r);};
  return(<>
    <header className={`nav ${solid?"solid":""} ${spot?"spot-on":""}`} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();sx.set(e.clientX-r.left);sy.set(e.clientY-r.top)}}
      onMouseEnter={()=>setSpot(true)} onMouseLeave={()=>setSpot(false)}>
      <div className="nav-clip"><motion.div className="nav-spot" style={{x:sx,y:sy}}/></div>
      <div className="wrap nav-inner">
        <Brand/>
        <nav className="nav-links">
          <div className="nav-drop">
            <a className="navlink nav-drop-trigger" href="/services" onClick={e=>page(e,"services")}>{t.nav_services}<i className="nav-chev" aria-hidden="true"/></a>
            <div className="nav-drop-menu">
              {SERVICE_ROUTES.map(r=>(
                <a key={r} className="nav-drop-item" href={"/"+r} onClick={e=>page(e,r)}>{SERVICE_LABELS[lang][r]}</a>
              ))}
              <a className="nav-drop-item nav-drop-all" href="/services" onClick={e=>page(e,"services")}>{t.nav_all_services}</a>
            </div>
          </div>
          <a className="navlink" href="/objectifs" onClick={e=>page(e,"objectifs")}>{t.nav_objectifs}</a>
          <a className="navlink" onClick={()=>go("work")}>{t.nav_work}</a>
          <a className="navlink" onClick={()=>go("contact")}>{t.nav_contact}</a>
        </nav>
        <div className="nav-right">
          <div className="lang">{["fr","en","de"].map(l=><button key={l} className={lang===l?"on":""} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div>
          <Magnetic className="btn fill" onClick={()=>go("contact")}>{t.nav_cta}</Magnetic>
          <button className={`burger ${open?"x":""}`} onClick={()=>setOpen(o=>!o)} aria-label="Menu"><span/><span/><span/></button>
        </div>
      </div>
    </header>
    <AnimatePresence>{open&&(
      <motion.div className="mobile-menu" initial={{y:"-100%"}} animate={{y:0}} exit={{y:"-100%"}} transition={{duration:.5,ease:[.7,0,.2,1]}}>
        {[["p:services",t.nav_services],["p:objectifs",t.nav_objectifs],["work",t.nav_work],["contact",t.nav_contact]].map(([id,label],i)=>(
          <motion.a key={id} href={id.startsWith("p:")?"/"+id.slice(2):undefined} onClick={e=>id.startsWith("p:")?page(e,id.slice(2)):go(id)} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.12+i*.06}}>{label}</motion.a>))}
        {SERVICE_ROUTES.map((r,i)=>(
          <motion.a key={r} className="mm-sub" href={"/"+r} onClick={e=>page(e,r)} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.4+i*.05}}>{SERVICE_LABELS[lang][r]}</motion.a>))}
        <div className="mm-foot">hello@webgrowth.lu · Luxembourg</div>
      </motion.div>)}</AnimatePresence>
  </>);
}

/* ===================== FALLBACK REVEAL (Canvas 2D, sans WebGL) ===================== */
function startFallbackReveal(host, imgUrl){
  if(!host) return null;
  const canvas=document.createElement("canvas");
  canvas.className="water-canvas"; canvas.style.display="block";
  host.appendChild(canvas);
  const ctx=canvas.getContext("2d"); if(!ctx){canvas.remove();return null;}
  const mask=document.createElement("canvas"); const mctx=mask.getContext("2d");
  const img=new Image(); let ready=false; img.onload=()=>{ready=true}; img.src=imgUrl;
  const dpr=()=>Math.min(window.devicePixelRatio||1,2);
  function resize(){const r=host.getBoundingClientRect();const d=dpr();
    const w=Math.max(1,Math.floor(r.width*d)),h=Math.max(1,Math.floor(r.height*d));
    canvas.width=w;canvas.height=h;mask.width=w;mask.height=h;}
  resize();
  let last=null;
  function brush(x,y){const d=dpr();const rad=52*d;
    const g=mctx.createRadialGradient(x,y,0,x,y,rad);
    g.addColorStop(0,"rgba(255,255,255,0.6)");g.addColorStop(.6,"rgba(255,255,255,0.28)");g.addColorStop(1,"rgba(255,255,255,0)");
    mctx.fillStyle=g;mctx.beginPath();mctx.arc(x,y,rad,0,Math.PI*2);mctx.fill();}
  function onMove(e){const r=host.getBoundingClientRect();const d=dpr();
    const x=(e.clientX-r.left)*d,y=(e.clientY-r.top)*d;
    if(last){const dx=x-last.x,dy=y-last.y;const steps=Math.min(24,Math.ceil(Math.hypot(dx,dy)/20));
      for(let i=1;i<=steps;i++)brush(last.x+dx*i/steps,last.y+dy*i/steps);} else brush(x,y);
    last={x,y};}
  host.addEventListener("pointermove",onMove);
  const onResize=()=>resize(); window.addEventListener("resize",onResize);
  function cover(w,h){const iw=img.naturalWidth,ih=img.naturalHeight;const s=Math.max(w/iw,h/ih);
    const dw=iw*s,dh=ih*s;return[(w-dw)/2,(h-dh)/2,dw,dh];}
  let raf,destroyed=false;
  function frame(){if(destroyed)return;
    mctx.globalCompositeOperation="destination-out";mctx.fillStyle="rgba(0,0,0,0.10)";mctx.fillRect(0,0,mask.width,mask.height);
    mctx.globalCompositeOperation="source-over";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(ready){ctx.globalCompositeOperation="source-over";const[dx,dy,dw,dh]=cover(canvas.width,canvas.height);
      ctx.drawImage(img,dx,dy,dw,dh);
      ctx.globalCompositeOperation="destination-in";ctx.drawImage(mask,0,0);
      ctx.globalCompositeOperation="source-over";}
    raf=requestAnimationFrame(frame);}
  raf=requestAnimationFrame(frame);
  return()=>{destroyed=true;cancelAnimationFrame(raf);host.removeEventListener("pointermove",onMove);window.removeEventListener("resize",onResize);canvas.remove();};
}

/* ============================ HERO ============================ */
function HeroSpace(){
  return(
    <div className="hero-space" aria-hidden="true">
      <div className="hs-stars"/><div className="hs-stars hs-stars2"/><div className="hs-stars hs-stars3"/>
      <div className="hs-rocket"><span className="hs-ship"><span className="hs-trail"/><RocketIcon/></span></div>
    </div>);
}
function Hero({t}){
  const [idx,setIdx]=useState(0);const words=t.rotator;
  const heroRef=useRef(null),waterRef=useRef(null);
  useEffect(()=>{setIdx(0);const id=setInterval(()=>setIdx(i=>(i+1)%words.length),2200);return()=>clearInterval(id)},[t]);
  useEffect(()=>{if(window.matchMedia("(hover: none)").matches)return;
    if(lowFX()){ if(waterRef.current) waterRef.current.style.display="none"; return; } // appareil faible → pas de simulation d'eau WebGL
    let fx=null;
    try{ fx=initWaterReveal({canvas:waterRef.current,container:heroRef.current,imageUrl:revealImg,
      options:{WET_RADIUS:0.0036,SPLASH_RADIUS:0.0009,WET_DECAY:0.968,WAVE_SPEED:1.95,WAVE_DAMPING:0.99}}); }catch(e){ fx=null; }
    if(fx) return()=>{try{fx.destroy()}catch(e){}};
    // Fallback Canvas 2D (WebGL indisponible)
    if(waterRef.current) waterRef.current.style.display="none";
    const dispose=startFallbackReveal(heroRef.current,revealImg);
    return()=>{if(dispose)dispose()};
  },[]);
  const pmx=useMotionValue(0),pmy=useMotionValue(0);
  const px=useSpring(pmx,{stiffness:110,damping:20}),py=useSpring(pmy,{stiffness:110,damping:20});
  const onParallax=e=>{pmx.set((e.clientX/window.innerWidth-0.5)*22);pmy.set((e.clientY/window.innerHeight-0.5)*16);};
  const line={hidden:{},show:{transition:{staggerChildren:.12,delayChildren:.1}}};
  const reveal={hidden:{yPercent:120},show:{yPercent:0,transition:{duration:.9,ease:[.16,1,.3,1]}}};
  return(
    <section className="hero" id="top" ref={heroRef}>
      <AnimatedHeroBG/><div className="hero-bg"/><canvas className="water-canvas" ref={waterRef}/><HeroSpace/>
      {[{y:"15%",c:"var(--cyan)",ang:"-20deg",dur:"4.6s",d:"0s"},
        {y:"25%",c:"var(--magenta)",ang:"-16deg",dur:"5.8s",d:"1.4s"},
        {y:"39%",c:"var(--violet)",ang:"-24deg",dur:"5.2s",d:"2.6s"},
        {y:"57%",c:"var(--cyan)",ang:"-18deg",dur:"6.4s",d:"0.8s"},
        {y:"71%",c:"var(--magenta)",ang:"-22deg",dur:"5s",d:"3.4s"},
        {y:"85%",c:"var(--amber)",ang:"-14deg",dur:"6s",d:"2s"}].map((s,i)=>(
        <span key={i} className="shoot" style={{"--y":s.y,"--c":s.c,"--ang":s.ang,"--dur":s.dur,"--d":s.d}}/>))}
      <div className="wrap">
        <motion.span className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span className="dot"/>{t.hero_eyebrow}</motion.span>
        <motion.h1 variants={line} initial="hidden" animate="show">
          <span className="line"><motion.span style={{display:"inline-block"}} variants={reveal}>{t.hero_l1}</motion.span></span>
          <span className="line"><motion.span style={{display:"inline-block"}} variants={reveal}>{t.hero_l2}</motion.span></span>
          <span className="line"><AnimatePresence mode="wait"><motion.span key={words[idx]} className="rw"
            initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-20,opacity:0}} transition={{duration:.28}}>{words[idx]}</motion.span></AnimatePresence></span>
        </motion.h1>
        <motion.p className="sub" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.5}}>{t.hero_sub}</motion.p>
        <motion.div className="hero-cta" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.64}}>
          <Magnetic className="btn fill" onClick={()=>scrollToId("contact")}>{t.hero_cta1}</Magnetic>
          <Magnetic className="btn ghost" onClick={()=>scrollToId("work")}>{t.hero_cta2}</Magnetic>
        </motion.div>
      </div>
      <div className="scroll-hint"><span className="mouse"/>{t.scroll}</div>
    </section>
  );
}

/* ============================ MARQUEE ============================ */
function Marquee({items,alt,reverse,gray}){
  return(<div className={`marquee ${alt?"alt":""}`} style={gray?{background:"var(--bg)",color:"var(--fog)"}:undefined}>
    <motion.div className="mq-track" animate={{x:reverse?["-50%","0%"]:["0%","-50%"]}} transition={{duration:28,ease:"linear",repeat:Infinity}}>
      {[...items,...items].map((it,i)=><span key={i} style={gray?{color:"var(--fog)",opacity:.5}:undefined}>{it}</span>)}
    </motion.div></div>);
}

/* ============================ MANIFESTO ============================ */
function ManWord({word,index,total,progress,hi}){
  const s=index/total*0.9,e=s+1/total;const opacity=useTransform(progress,[s,e],[0.16,1]);
  return <motion.span className="w" style={{opacity,color:hi?"var(--lime)":"var(--paper)",textShadow:hi?"0 0 22px rgba(201,255,59,.5)":"none"}}>{word}</motion.span>;
}
function Manifesto({t}){
  const ref=useRef(null);const{scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const words=t.man_big.split(" ");const hi=new Set(t.man_hi);
  return(<section className="manifesto" ref={ref} style={{height:"220vh"}}>
    <div className="man-pin"><div className="wrap" style={{position:"relative",width:"100%"}}>
      <span className="tag man-tag">{t.man_tag}</span>
      <p className="man-big">{words.map((w,i)=><ManWord key={i} word={w} index={i} total={words.length} progress={scrollYProgress} hi={hi.has(w)}/>)}</p>
    </div></div></section>);
}

/* ============================ HORIZONTAL SERVICES ============================ */
function isTouchLike(){ try{ return window.matchMedia("(hover: none), (pointer: coarse)").matches || window.innerWidth<=900; }catch(_){ return false; } }
// angles « jeu de cartes » — chaque carte empilée légèrement de travers
const DECK_ANGLES=[-3.4,2.6,-1.8,3.2,-2.7,1.7,-2.2,2.9];
function HorizontalServices({t,lang}){
  const ref=useRef(null);const rowRef=useRef(null);const items=SERVICES[lang];
  const [mobile,setMobile]=useState(()=>isTouchLike());
  const{scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const [maxShift,setMaxShift]=useState(1600);
  useEffect(()=>{
    const onR=()=>setMobile(isTouchLike());
    const calc=()=>{if(!isTouchLike()&&rowRef.current){const rw=rowRef.current.scrollWidth;const vw=window.innerWidth;setMaxShift(Math.max(0,rw-vw+64));}};
    onR();calc();const t1=setTimeout(calc,250);const t2=setTimeout(calc,900);
    window.addEventListener("resize",()=>{onR();calc();});
    return()=>{clearTimeout(t1);clearTimeout(t2);window.removeEventListener("resize",calc);};
  },[lang,items.length]);
  const x=useTransform(scrollYProgress,[0,1],[16,-maxShift]);
  useEffect(()=>{
    // Effet tilt : desktop uniquement (jamais sur mobile — coûteux)
    if(isTouchLike()||!rowRef.current)return;
    const nodes=rowRef.current.querySelectorAll(".hcard");
    VanillaTilt.init(nodes,{max:7,speed:500,glare:true,"max-glare":.22,scale:1.02,perspective:1000,gyroscope:false});
    return()=>nodes.forEach(n=>n.vanillaTilt&&n.vanillaTilt.destroy());
  },[lang,mobile]);
  const cardInner=(s,i,col)=>(<>
    <div className="hnum">{String(i+1).padStart(2,"0")}</div><div className="hico">{SVG[s.i](col)}</div>
    <h3>{s.t}</h3><p>{s.d}</p><div className="htags">{s.tags.map((tg,j)=><span key={j}>{tg}</span>)}</div>
    <span className="hcard-go" aria-hidden="true">{t.svc_discover||"Découvrir"} →</span>
  </>);
  const cards=items.map((s,i)=>{const dark=["c3","c4","c5"].includes(s.c);const col=dark?"#131018":"#fff";
    return(<a key={i} className={`hcard ${s.c}`} href={"/"+s.route} onClick={e=>{e.preventDefault();goPage(s.route);}}>{cardInner(s,i,col)}</a>);});
  // MOBILE : cartes qui s'empilent (sticky stacking, façon cafein.lu) — pur CSS sticky,
  // donc fluide, + un léger fondu/montée React (framer) à l'apparition de chaque carte.
  if(mobile){
    return(<section className="hsvc hsvc-mobile" id="services">
      <div className="hsvc-head wrap"><div><span className="tag">{t.svc_tag}</span><ScrambleText as="h2" text={t.svc_title}/></div></div>
      <div className="hsvc-stack">
        {items.map((s,i)=>{const dark=["c3","c4","c5"].includes(s.c);const col=dark?"#131018":"#fff";
          const ang=DECK_ANGLES[i%DECK_ANGLES.length];
          return(<div className="hstick" key={i} style={{top:`calc(74px + ${i*13}px)`,zIndex:i+1}}>
            <motion.a className={`hcard ${s.c}`} href={"/"+s.route} onClick={e=>{e.preventDefault();goPage(s.route);}}
              initial={{opacity:0,y:36,rotate:ang-3.5}} whileInView={{opacity:1,y:0,rotate:ang}}
              viewport={{once:true,amount:.4}} transition={{duration:.6,ease:[.16,1,.3,1]}}>
              {cardInner(s,i,col)}
            </motion.a>
          </div>);})}
      </div>
    </section>);
  }
  return(<section className="hsvc" id="services" ref={ref} style={{height:`${items.length*70}vh`}}>
    <div className="hsvc-pin">
      <div className="hsvc-head wrap" style={{maxWidth:"none"}}><div><span className="tag">{t.svc_tag}</span><ScrambleText as="h2" text={t.svc_title}/></div></div>
      <motion.div className="hsvc-row" style={{x}} ref={rowRef}>{cards}</motion.div>
      <div className="hint-swipe">{t.swipe}</div>
      <div className="hprog"><motion.i style={{scaleX:scrollYProgress}}/></div>
    </div>
  </section>);
}

/* ============================ APPROACH ============================ */
function Approach({t,lang}){
  const steps=STEPS[lang];
  return(<section className="sec approach" id="approach">
    <div className="wrap">
      <div className="sec-head"><div><span className="tag">{t.app_tag}</span><ScrambleText as="h2" text={t.app_title}/></div><p>{t.app_intro}</p></div>
      <div className="steps">{steps.map((s,i)=>(
        <motion.div key={i} className="step" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-70px"}} transition={{duration:.6,delay:i*.08}}>
          <div className="st-num">{s.n}</div><h4>{s.t}</h4><p>{s.d}</p></motion.div>))}
      </div>
    </div>
  </section>);
}

/* ============================ WORK ============================ */
function ProjCard({p}){
  const ref=useRef(null);const{scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const y=useTransform(scrollYProgress,[0,1],["-8%","8%"]);
  const tx=useMotionValue(0),ty=useMotionValue(0);
  const rX=useSpring(ty,{stiffness:200,damping:18}),rY=useSpring(tx,{stiffness:200,damping:18});
  const move=e=>{const r=e.currentTarget.getBoundingClientRect();
    tx.set(((e.clientX-r.left)/r.width-0.5)*11); ty.set(-((e.clientY-r.top)/r.height-0.5)*11);};
  const leave=()=>{tx.set(0);ty.set(0);};
  return(<motion.article ref={ref} className={`proj ${p.k} ${p.cls}`} onMouseMove={move} onMouseLeave={leave}
      initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7}}
      style={{transformPerspective:900,rotateX:rX,rotateY:rY}}>
    <motion.div className="pbg" style={{y}}/><div className="arrow">↗</div>
    <div className="cat">{p.cat}</div><h3>{p.t}</h3><p className="pdesc">{p.d}</p></motion.article>);
}
function Work({t,lang}){
  return(<section className="sec work" id="work">
    <div className="wrap">
      <div className="sec-head"><div><span className="tag">{t.work_tag}</span><ScrambleText as="h2" text={t.work_title}/></div><p>{t.work_intro}</p></div>
      <div className="work-grid">{PROJECTS[lang].map((p,i)=><ProjCard key={i} p={p}/>)}</div>
    </div>
  </section>);
}

/* ============================ STATS ============================ */
function Counter({value,suffix}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-80px"});const[n,setN]=useState(value===null?null:0);
  useEffect(()=>{if(!inView||value===null)return;let raf,start;const dur=1400;
    const step=ts=>{if(!start)start=ts;const p=Math.min((ts-start)/dur,1);setN(Math.round((1-Math.pow(1-p,3))*value));if(p<1)raf=requestAnimationFrame(step)};
    raf=requestAnimationFrame(step);return()=>cancelAnimationFrame(raf)},[inView,value]);
  return <span ref={ref}>{value===null?suffix:`${n}${suffix}`}</span>;
}
function Stats({lang}){
  return(<section className="sec stats">
    <div className="wrap"><div className="stats-grid">{STATS[lang].map((s,i)=>(
      <motion.div key={i} className="stat" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:i*.08}}>
        <div className="n"><Counter value={s.v} suffix={s.s}/></div><div className="l">{s.l}</div></motion.div>))}
    </div></div></section>);
}

/* ============================ CONTACT ============================ */
function Contact({t,lang}){
  const submit=e=>{e.preventDefault();const f=e.target;
    const subject=encodeURIComponent("Nouveau projet — "+f.need.value);
    const body=encodeURIComponent(`Nom: ${f.name.value}\nEmail: ${f.email.value}\nBesoin: ${f.need.value}\n\n${f.message.value}`);
    const colors=["#00E0FF","#FF2D9B","#7A3BFF","#C9FF3B","#FFB23A"];
    try{
      confetti({particleCount:100,spread:75,startVelocity:60,origin:{x:.5,y:.95},colors,scalar:1.1});
      setTimeout(()=>confetti({particleCount:60,spread:110,startVelocity:45,origin:{x:.5,y:.9},colors}),150);
    }catch(_){}
    setTimeout(()=>{window.location.href=`mailto:hello@webgrowth.lu?subject=${subject}&body=${body}`},700);};
  return(<section className="sec contact" id="contact">
    <Particles id="p-contact"/>
    <div className="wrap contact-grid" style={{position:"relative",zIndex:1}}>
      <div>
        <span className="tag">{t.con_tag}</span>
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>{t.con_a}<em>{t.con_em}</em>{t.con_b}</motion.h2>
        <p className="c-lead">{t.con_lead}</p>
        <div className="c-meta">
          <a href="mailto:hello@webgrowth.lu"><span className="ci">✉</span>hello@webgrowth.lu</a>
          <a href="tel:+352000000"><span className="ci">☎</span>+352 00 00 00</a>
          <div><span className="ci">⚲</span>{t.con_loc}</div>
        </div>
      </div>
      <motion.form onSubmit={submit} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7}}>
        <div className="field"><label>{t.f_name}</label><input type="text" name="name" required/></div>
        <div className="field"><label>{t.f_email}</label><input type="email" name="email" required/></div>
        <div className="field"><label>{t.f_need}</label><select name="need">{SERVICES[lang].map((s,i)=><option key={i}>{s.t}</option>)}</select></div>
        <div className="field"><label>{t.f_msg}</label><textarea name="message"/></div>
        <button type="submit" className="btn">{t.f_send}</button>
        <p className="form-note">{t.f_note}</p>
      </motion.form>
    </div>
  </section>);
}

/* ============================ FOOTER ============================ */
function Footer({t}){
  return(<footer><div className="wrap">
    <div className="foot-top"><div className="foot-logo">WEB GROWTH</div>
      <div className="socials">{["IG","IN","TT","YT"].map(s=><a key={s} href="#" aria-label={s}>{s}</a>)}</div></div>
    <div className="foot-bot">
      <span>© {new Date().getFullYear()} {BRAND} — {t.foot_rights}</span>
      <span>{t.foot_made}</span>
      <span><a href="#">{t.foot_legal}</a> · <a href="#">{t.foot_privacy}</a></span>
    </div></div></footer>);
}

/* ============================ ROCKET BACK-TO-TOP ============================ */
function WarpCanvas(){
  const ref=useRef(null);
  useEffect(()=>{
    const c=ref.current;if(!c)return;const ctx=c.getContext("2d");if(!ctx)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const resize=()=>{c.width=window.innerWidth*dpr;c.height=window.innerHeight*dpr;};resize();
    const cols=["#00E0FF","#FF2D9B","#C9FF3B","#ffffff","#7A3BFF"];
    const N=280,stars=[];
    const cx=()=>c.width/2, cy=()=>c.height*0.55;
    for(let i=0;i<N;i++)stars.push({a:Math.random()*Math.PI*2,r:Math.random()*30*dpr,v:(1.6+Math.random()*3)*dpr,col:cols[i%cols.length]});
    let raf,destroyed=false;
    ctx.globalCompositeOperation="lighter";ctx.lineCap="round";
    const frame=()=>{if(destroyed)return;
      ctx.clearRect(0,0,c.width,c.height); // transparent : le site reste visible derrière
      const CX=cx(),CY=cy(),max=Math.hypot(c.width,c.height);
      for(const s of stars){
        const px=CX+Math.cos(s.a)*s.r, py=CY+Math.sin(s.a)*s.r;
        s.v*=1.075; s.r+=s.v;
        const nx=CX+Math.cos(s.a)*s.r, ny=CY+Math.sin(s.a)*s.r;
        ctx.strokeStyle=s.col;ctx.lineWidth=Math.min(2.4*dpr,0.4+s.r/(170*dpr));
        ctx.globalAlpha=Math.min(.85,s.r/(110*dpr));
        ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(nx,ny);ctx.stroke();
        if(s.r>max){s.r=Math.random()*12*dpr;s.v=(1.6+Math.random()*3)*dpr;}
      }
      ctx.globalAlpha=1;raf=requestAnimationFrame(frame);
    };
    raf=requestAnimationFrame(frame);
    window.addEventListener("resize",resize);
    return()=>{destroyed=true;cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas ref={ref} className="warp-canvas"/>;
}
function RocketIcon(){return(
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 2.5c4.2 3.9 6.2 8.9 6.2 14.5l-2.5 3.4h-7.4L9.8 17C9.8 11.4 11.8 6.4 16 2.5z" fill="#EAE5FF" stroke="#fff" strokeWidth="1"/>
    <circle cx="16" cy="12.6" r="2.5" fill="#12101e" stroke="#fff" strokeWidth="1"/>
    <path d="M12.4 19.6 7.7 24.2l4.7-.8z" fill="#FF2D9B"/>
    <path d="M19.6 19.6 24.3 24.2l-4.7-.8z" fill="#00E0FF"/>
    <path d="M13.6 20.6h4.8l-2.4 5.2z" fill="#FFB23A"/>
  </svg>);}
function RocketTop(){
  const [show,setShow]=useState(false);
  const [launch,setLaunch]=useState(false);
  useEffect(()=>{const on=()=>setShow(window.scrollY>window.innerHeight*0.9);window.addEventListener("scroll",on);on();return()=>window.removeEventListener("scroll",on);},[]);
  const up=()=>{
    if(launch)return; setLaunch(true);
    document.body.classList.add("warping");
    setTimeout(()=>{if(window.__lenis)window.__lenis.scrollTo(0,{duration:.6});else window.scrollTo({top:0,behavior:"auto"});},320);
    setTimeout(()=>{document.body.classList.remove("warping");setLaunch(false);},1050);
  };
  return(<>
    <AnimatePresence>{show&&!launch&&(
      <motion.button className="rocket-top" onClick={up} aria-label="Retour en haut"
        initial={{opacity:0,scale:0,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0,y:20}}
        whileHover={{y:-5}} whileTap={{scale:.88}} transition={{type:"spring",stiffness:300,damping:20}}>
        <span className="rk"><RocketIcon/></span>
      </motion.button>)}</AnimatePresence>
    <AnimatePresence>{launch&&(
      <motion.div className="warp" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.18}}>
        <div className="warp-flash"/>
        <motion.div className="warp-rocket"
          initial={{y:"55vh",opacity:0,scale:.7}}
          animate={{y:"-140vh",opacity:[0,1,1,1],scale:1.15,rotate:[-3,3,-3,2]}}
          transition={{duration:.95,ease:[.45,0,.9,1]}}>
          <span className="warp-trail"/><RocketIcon/>
        </motion.div>
      </motion.div>)}</AnimatePresence>
  </>);
}

/* ============================ MOBILE CTA (barre du bas) ============================ */
function MobileCTA({t}){
  return(
    <button className="mobile-cta" onClick={()=>scrollToId("contact")} aria-label={t.nav_cta}>
      <span>{t.nav_cta}</span>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </button>
  );
}

/* ============================ AI AVATAR ============================ */
function AiAvatar(){return(
  <svg className="ai-av" viewBox="0 0 48 48" fill="none">
    <line x1="24" y1="3.5" x2="24" y2="9" stroke="#00E0FF" strokeWidth="2" strokeLinecap="round"/>
    <circle className="ai-antenna" cx="24" cy="3.5" r="2.5" fill="#C9FF3B"/>
    <rect x="7" y="9" width="34" height="32" rx="11" fill="#0d0b18" stroke="#00E0FF" strokeWidth="1.6"/>
    <rect x="11.5" y="14.5" width="25" height="19" rx="8" fill="#07060f" stroke="rgba(255,255,255,.08)"/>
    <g className="ai-eyes" fill="#00E0FF"><rect x="16" y="20" width="5.4" height="8" rx="2.7"/><rect x="26.6" y="20" width="5.4" height="8" rx="2.7"/></g>
    <path d="M20 31c2.2 1.7 5.8 1.7 8 0" stroke="#FF2D9B" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12.5" cy="30" r="1.5" fill="#FF2D9B" opacity="0.8"/>
    <circle cx="35.5" cy="30" r="1.5" fill="#FF2D9B" opacity="0.8"/>
  </svg>);}

/* ============================ CONCIERGE IA ============================ */
const CONCIERGE={
 fr:{title:"Concierge · Web Growth",sub:"En ligne",greet:"Salut 👋 Je suis l'assistant de Web Growth. Sur quoi peut-on t'aider ?",
   placeholder:"Écris ton besoin…",cta:"Démarrer ce projet",devis:"Un devis",
   resp:["On pose ta plateforme de marque — positionnement, ton de voix, identité. Une marque claire et mémorable. On lance ?",
     "Logo, charte, direction artistique : une image qui te ressemble et qui marque. Je t'emmène au brief ?",
     "Ligne édito + contenu + community management qui fait vraiment grandir ta communauté. On en parle ?",
     "Campagnes Meta / Google / TikTok orientées ROI, chaque euro optimisé. On démarre par un audit ?",
     "Site vitrine, landing ou e-commerce — rapide, beau, pensé pour convertir. On chiffre ton projet ?",
     "Reels, motion, production — du contenu qui arrête le pouce. Dis-moi le format, on te propose un plan.",
     "On te rend visible sur Google et on transforme tes visiteurs en clients. On regarde ta visibilité ensemble ?"],
   respDevis:"Avec plaisir ! Le plus rapide : lance ton projet et l'équipe revient sous 48h avec un chiffrage.",
   respFallback:"Bien reçu ! Décris-le à l'équipe et tu auras des idées concrètes sous 48h. Je t'emmène au formulaire ?"},
 en:{title:"Concierge · Web Growth",sub:"Online",greet:"Hey 👋 I'm the Web Growth assistant. What can we help you with?",
   placeholder:"Type your need…",cta:"Start this project",devis:"Get a quote",
   resp:["We build your brand platform — positioning, tone of voice, identity. A clear, memorable brand. Shall we start?",
     "Logo, guidelines, art direction: a look that's truly you and impossible to ignore. Take you to the brief?",
     "Editorial line + content + community management that really grows your audience. Want to talk?",
     "Meta / Google / TikTok campaigns built for ROI, every euro optimised. Start with an audit?",
     "Showcase site, landing or e-commerce — fast, beautiful, built to convert. Shall we scope it?",
     "Reels, motion, production — content that stops the scroll. Tell me the format, we'll propose a plan.",
     "We make you visible on Google and turn visitors into customers. Shall we review your visibility together?"],
   respDevis:"With pleasure! Fastest way: start your project and the team replies within 48h with a quote.",
   respFallback:"Got it! Describe it to the team and you'll get concrete ideas within 48h. Take you to the form?"},
 de:{title:"Concierge · Web Growth",sub:"Online",greet:"Hey 👋 Ich bin der Web-Growth-Assistent. Womit können wir helfen?",
   placeholder:"Schreib deinen Bedarf…",cta:"Projekt starten",devis:"Angebot",
   resp:["Wir bauen deine Markenplattform — Positionierung, Tonalität, Identität. Eine klare, einprägsame Marke. Starten?",
     "Logo, Guidelines, Art Direction: ein Look, der zu dir passt und auffällt. Weiter zum Briefing?",
     "Redaktionslinie + Content + Community Management, das deine Community wirklich wachsen lässt. Reden wir?",
     "Meta-/Google-/TikTok-Kampagnen auf ROI ausgelegt, jeder Euro optimiert. Mit einem Audit starten?",
     "Website, Landing oder E-Commerce — schnell, schön, auf Conversion gebaut. Kalkulieren?",
     "Reels, Motion, Produktion — Content, der den Daumen stoppt. Nenn das Format, wir schlagen einen Plan vor.",
     "Wir machen dich bei Google sichtbar und verwandeln Besucher in Kunden. Schauen wir uns deine Sichtbarkeit an?"],
   respDevis:"Gerne! Am schnellsten: Projekt starten und das Team meldet sich in 48h mit einem Angebot.",
   respFallback:"Verstanden! Beschreib es dem Team und du bekommst in 48h konkrete Ideen. Zum Formular?"}
};
function Concierge({open,setOpen,lang}){
  const d=CONCIERGE[lang];
  const [msgs,setMsgs]=useState([{from:"bot",text:d.greet}]);
  const [typing,setTyping]=useState(false);
  const bodyRef=useRef(null);
  useEffect(()=>{setMsgs([{from:"bot",text:CONCIERGE[lang].greet}]);},[lang]);
  useEffect(()=>{if(bodyRef.current)bodyRef.current.scrollTop=bodyRef.current.scrollHeight;},[msgs,typing,open]);
  const reply=(text,cta)=>{setTyping(true);setTimeout(()=>{setTyping(false);setMsgs(m=>[...m,{from:"bot",text,cta}]);},680);};
  const pick=i=>{setMsgs(m=>[...m,{from:"user",text:SERVICES[lang][i].t}]);reply(d.resp[i],{label:d.cta,index:i});};
  const devis=()=>{setMsgs(m=>[...m,{from:"user",text:d.devis}]);reply(d.respDevis,{label:d.cta,index:-1});};
  const submit=e=>{e.preventDefault();const v=e.target.q.value.trim();if(!v)return;e.target.reset();setMsgs(m=>[...m,{from:"user",text:v}]);reply(d.respFallback,{label:d.cta,index:-1});};
  const doCta=index=>{setOpen(false);scrollToId("contact");setTimeout(()=>{const sel=document.querySelector('#contact select[name="need"]');if(sel&&index>=0)sel.selectedIndex=index;},720);};
  return(<>
    <AnimatePresence>{!open&&(
      <motion.button className="cc-orb" onClick={()=>setOpen(true)} aria-label="Concierge"
        initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0,opacity:0}} whileHover={{scale:1.08}} whileTap={{scale:.9}}>
        <AiAvatar/>
        <i className="cc-orb-dot"/>
      </motion.button>)}</AnimatePresence>
    <AnimatePresence>{open&&(
      <motion.div className="cc-panel" initial={{opacity:0,y:24,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:24,scale:.96}} transition={{type:"spring",stiffness:260,damping:24}}>
        <div className="cc-head">
          <span className="cc-avatar"><AiAvatar/></span>
          <div className="cc-meta"><div className="cc-title">{d.title}</div><div className="cc-sub"><i/>{d.sub}</div></div>
          <button className="cc-close" onClick={()=>setOpen(false)} aria-label="Fermer">✕</button>
        </div>
        <div className="cc-body" ref={bodyRef}>
          {msgs.map((m,i)=>(<div key={i} className={`cc-msg ${m.from}`}>
            <div className="cc-bubble">{m.text}{m.cta&&<button className="cc-cta" onClick={()=>doCta(m.cta.index)}>{m.cta.label} →</button>}</div>
          </div>))}
          {typing&&<div className="cc-msg bot"><div className="cc-bubble cc-typing"><span/><span/><span/></div></div>}
        </div>
        <div className="cc-chips">
          {SERVICES[lang].map((s,i)=><button key={i} onClick={()=>pick(i)}>{s.t}</button>)}
          <button className="alt" onClick={devis}>{d.devis}</button>
        </div>
        <form className="cc-input" onSubmit={submit}><input name="q" autoComplete="off" placeholder={d.placeholder}/><button type="submit" aria-label="Envoyer">➤</button></form>
      </motion.div>)}</AnimatePresence>
  </>);
}

/* ============================ COMMAND PALETTE ============================ */
function CommandPalette({t,lang,setLang,openConcierge,triggerRave}){
  const [open,setOpen]=useState(false);
  const [q,setQ]=useState("");
  const [idx,setIdx]=useState(0);
  const inputRef=useRef(null);
  useEffect(()=>{
    const onKey=e=>{
      if(!open){ if(e.key==="/"){const el=e.target;const tag=el&&el.tagName;if(tag&&/^(INPUT|TEXTAREA|SELECT)$/.test(tag)||el&&el.isContentEditable)return;e.preventDefault();setOpen(true);setQ("");setIdx(0);} }
      else if(e.key==="Escape"){setOpen(false);}
    };
    window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);
  },[open]);
  useEffect(()=>{if(open&&inputRef.current)inputRef.current.focus();},[open]);
  const goTop=()=>{if(window.__lenis)window.__lenis.scrollTo(0,{duration:1});else window.scrollTo({top:0,behavior:"smooth"});};
  const CMDS=[
    {ic:"⌂",label:{fr:"Accueil",en:"Home",de:"Start"}[lang],hint:"↑",run:goTop},
    {ic:"◆",label:t.nav_services,hint:"#services",run:()=>scrollToId("services")},
    {ic:"◆",label:t.nav_work,hint:"#work",run:()=>scrollToId("work")},
    {ic:"◆",label:t.nav_approach,hint:"#approach",run:()=>scrollToId("approach")},
    {ic:"✉",label:t.nav_contact,hint:"#contact",run:()=>scrollToId("contact")},
    {ic:"⚡",label:t.nav_cta,hint:"CTA",run:()=>scrollToId("contact")},
    {ic:"◍",label:"Concierge IA",hint:"chat",run:()=>openConcierge()},
    {ic:"◐",label:"Langue · FR",hint:"lang",run:()=>setLang("fr")},
    {ic:"◐",label:"Langue · EN",hint:"lang",run:()=>setLang("en")},
    {ic:"◐",label:"Langue · DE",hint:"lang",run:()=>setLang("de")},
    {ic:"✦",label:"RAVE MODE",hint:"secret",run:()=>triggerRave()},
  ];
  const filtered=CMDS.filter(c=>c.label.toLowerCase().includes(q.toLowerCase()));
  const exec=c=>{setOpen(false);if(c)c.run();};
  const onKey=e=>{
    if(e.key==="ArrowDown"){e.preventDefault();setIdx(i=>Math.min(filtered.length-1,i+1));}
    else if(e.key==="ArrowUp"){e.preventDefault();setIdx(i=>Math.max(0,i-1));}
    else if(e.key==="Enter"){e.preventDefault();exec(filtered[idx]);}
  };
  return(<AnimatePresence>{open&&(
    <motion.div className="cmdk-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}>
      <motion.div className="cmdk" initial={{y:-18,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} exit={{y:-18,opacity:0}} onClick={e=>e.stopPropagation()}>
        <div className="cmdk-in"><span className="cmdk-prompt">{">"}</span>
          <input ref={inputRef} value={q} onChange={e=>{setQ(e.target.value);setIdx(0);}} onKeyDown={onKey} placeholder="Commande… (services, contact, langue, rave)"/>
          <kbd>ESC</kbd></div>
        <div className="cmdk-list">
          {filtered.length===0&&<div className="cmdk-empty">— rien —</div>}
          {filtered.map((c,i)=>(<button key={i} className={`cmdk-item ${i===idx?"on":""}`} onMouseEnter={()=>setIdx(i)} onClick={()=>exec(c)}>
            <span className="ci-ic">{c.ic}</span><span className="ci-l">{c.label}</span><span className="ci-h">{c.hint}</span></button>))}
        </div>
      </motion.div>
    </motion.div>)}</AnimatePresence>);
}

/* ============================ APP ============================ */
/* ============================ PAGES DÉDIÉES ============================ */
const SERVICE_ACCENT={
  "developpement-logiciel":{a:"#4D8CFF",a2:"#7A3BFF"},
  "application-mobile":{a:"#7A3BFF",a2:"#FF2D9B"},
  "creation-site-web":{a:"#00E0FF",a2:"#7A3BFF"},
  "design-ui-ux":{a:"#FF2D9B",a2:"#FFB23A"},
  "seo-conversion":{a:"#C9FF3B",a2:"#00E0FF"},
  "conseil-it":{a:"#00E0FF",a2:"#C9FF3B"},
  "objectifs":{a:"#C9FF3B",a2:"#00E0FF"},
};
function PageHero({data}){
  return(
    <section className="pg-hero">
      <AnimatedHeroBG/><div className="hero-bg"/>
      <div className="pg-orb pg-orb1" aria-hidden="true"/>
      <div className="pg-orb pg-orb2" aria-hidden="true"/>
      {[{y:"22%",c:"var(--acc,#00E0FF)",ang:"-20deg",dur:"5.2s",d:"0s"},
        {y:"48%",c:"var(--acc2,#FF2D9B)",ang:"-18deg",dur:"6.1s",d:"1.6s"},
        {y:"74%",c:"var(--acc,#7A3BFF)",ang:"-22deg",dur:"5.6s",d:"2.8s"}].map((s,i)=>(
        <span key={i} className="shoot" style={{"--y":s.y,"--c":s.c,"--ang":s.ang,"--dur":s.dur,"--d":s.d}}/>))}
      <div className="wrap">
        <motion.span className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}><span className="dot"/>{data.tag}</motion.span>
        <ScrambleText as="h1" className="pg-title" text={data.title}/>
        {data.valueProp&&<motion.p className="pg-vp" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.28}}>{data.valueProp}</motion.p>}
        <motion.p className="pg-intro" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.35}}>{data.intro}</motion.p>
        {data.heroCta&&(
          <motion.div className="pg-hero-cta" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.5}}>
            <Magnetic className="btn fill" onClick={()=>scrollToId("contact")}>{data.heroCta}</Magnetic>
          </motion.div>)}
      </div>
      <div className="scroll-hint"><span className="mouse"/></div>
    </section>
  );
}
function lerpHex(a,b,t){
  if(!a||a[0]!=="#"||!b||b[0]!=="#") return a||b||"#ffffff";
  const pa=[1,3,5].map(i=>parseInt(a.slice(i,i+2),16));
  const pb=[1,3,5].map(i=>parseInt(b.slice(i,i+2),16));
  const c=pa.map((v,i)=>Math.round(v+(pb[i]-v)*t));
  return "#"+c.map(v=>v.toString(16).padStart(2,"0")).join("");
}
function StatementWord({word,i,total,progress,acc,acc2}){
  const s=(i/total)*0.80, e=s+(1/total)*1.25;                  // révélation décalée, comme le manifeste
  const target=lerpHex(acc,acc2, total>1?i/(total-1):0);       // couleur le long du dégradé signature
  const color=useTransform(progress,[s,e],["#413e52",target]); // gris terne → couleur vive
  const opacity=useTransform(progress,[s,e],[0.55,1]);
  const shadow=useTransform(progress,[s,e],["0 0 0 rgba(0,0,0,0)","0 0 26px "+target+"55"]);
  return <motion.span className="sw" style={{color,opacity,textShadow:shadow}}>{word} </motion.span>;
}
function ServiceStatement({text,acc,acc2}){
  const ref=useRef(null);
  const{scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const words=text.split(" ");
  return(
    <section className="pg-statement" ref={ref}>
      <div className="pg-statement-pin">
        <span className="pg-statement-q" aria-hidden="true">“</span>
        <p className="pg-statement-p">
          {words.map((w,i)=><StatementWord key={i} word={w} i={i} total={words.length} progress={scrollYProgress} acc={acc} acc2={acc2}/>)}
        </p>
      </div>
    </section>
  );
}
function ServiceContext({label,text}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-80px"});
  const{scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const ty=useTransform(scrollYProgress,[0,1],[46,-34]);        // parallax paragraphe
  return(
    <section className="pg-context" ref={ref}><div className="wrap">
      <div className="pg-context-grid">
        <div className="pg-context-label"><span className="pg-ctx-bar"/>{label}</div>
        <motion.p className="pg-context-body" style={{y:ty}} initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.75}}>{text}</motion.p>
      </div>
    </div></section>
  );
}
function BenefitRow({b,i}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-70px"});
  const{scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const ny=useTransform(scrollYProgress,[0,1],[46,-46]);        // parallax du grand numéro
  return(
    <motion.div className="pg-ben-row" ref={ref} initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:i*.06}}>
      <motion.span className="pg-ben-idx" style={{y:ny}}>{String(i+1).padStart(2,"0")}</motion.span>
      <div className="pg-ben-txt"><h3>{b.h}</h3><p>{b.p}</p></div>
      <span className="pg-ben-line" aria-hidden="true"/>
    </motion.div>
  );
}
function ServiceBenefits({benefits,title}){
  return(
    <section className="pg-benefits"><div className="wrap">
      {title&&<ScrambleText as="h2" className="pg-sec-h pg-sec-h--left" text={title}/>}
      <div className="pg-ben-rows">
        {benefits.map((b,i)=><BenefitRow key={i} b={b} i={i}/>)}
      </div>
    </div></section>
  );
}
function ServiceIncluded({title,items}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section className="pg-incl" ref={ref}><div className="wrap">
      <ScrambleText as="h2" className="pg-sec-h" text={title}/>
      <ul className="pg-incl-list">
        {items.map((it,i)=>(
          <motion.li key={i} initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.5,delay:i*.05}}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12l5 5L20 6"/></svg>
            <span>{it}</span>
          </motion.li>
        ))}
      </ul>
    </div></section>
  );
}
function ServiceProof({proof}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section className="pg-proof" ref={ref}><div className="wrap">
      <ScrambleText as="h2" className="pg-sec-h" text={proof.title}/>
      <div className="pg-proof-grid">
        {proof.items.map((it,i)=>(
          <motion.div className="pg-proof-card" key={i} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.55,delay:i*.08}}>
            <span className="pg-proof-mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
            <h3>{it.h}</h3><p>{it.p}</p>
          </motion.div>
        ))}
      </div>
    </div></section>
  );
}
function ServicesHub({data}){
  return(
    <section className="pg-hub"><div className="wrap">
      <div className="pg-hub-head">
        <motion.span className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}><span className="dot"/>{data.tag}</motion.span>
        <ScrambleText as="h1" className="pg-title" text={data.title}/>
        <motion.p className="pg-intro" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}>{data.intro}</motion.p>
      </div>
      <div className="pg-hub-grid">
        {data.items.map((it,i)=>{
          const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-40px"});
          return(<motion.a key={it.route} className="pg-hub-card" href={"/"+it.route} ref={ref}
            onClick={e=>{e.preventDefault();goPage(it.route);}}
            initial={{opacity:0,y:34}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.55,delay:i*.06}}>
            <span className="pg-hub-n">{String(i+1).padStart(2,"0")}</span>
            <h3>{it.h}</h3><p>{it.p}</p>
            <span className="pg-hub-go">→</span>
          </motion.a>);
        })}
      </div>
    </div></section>
  );
}
function PageBlock({b,i}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-80px"});
  return(
    <motion.div className="pg-block" ref={ref} initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,ease:[.16,1,.3,1]}}>
      <div className="pg-block-num">{String(i+1).padStart(2,"0")}</div>
      <div className="pg-block-main">
        <h2>{b.h}</h2>
        <p>{b.p}</p>
        {b.items&&<ul className="pg-list">{b.items.map((it,j)=><li key={j}><span className="pg-li-dot"/>{it}</li>)}</ul>}
      </div>
    </motion.div>
  );
}
function PageCTA({data}){
  return(
    <section className="pg-cta">
      <div className="wrap">
        <ScrambleText as="h2" className="pg-cta-h" text={data.h}/>
        <p>{data.p}</p>
        <Magnetic className="btn fill" onClick={()=>scrollToId("contact")}>{data.btn}</Magnetic>
      </div>
    </section>
  );
}
function PageMethod({method}){
  const ref=useRef(null);
  const{scrollYProgress}=useScroll({target:ref,offset:["start center","end center"]});
  const lineScale=useTransform(scrollYProgress,[0,1],[0,1]);
  return(
    <section className="pg-method" ref={ref}><div className="wrap">
      <ScrambleText as="h2" className="pg-sec-h" text={method.title}/>
      <div className="pg-timeline">
        <span className="pg-tl-line pg-tl-line-bg" aria-hidden="true"/>
        <motion.span className="pg-tl-line pg-tl-line-fg" aria-hidden="true" style={{scaleY:lineScale}}/>
        {method.steps.map((s,i)=>{
          const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-60px"});
          return(<motion.div className="pg-tl-step" key={i} ref={ref} initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.55,delay:i*.1}}>
            <div className="pg-tl-node"><span>{String(i+1).padStart(2,"0")}</span></div>
            <div className="pg-tl-body"><h3>{s.h}</h3><p>{s.p}</p></div>
          </motion.div>);
        })}
      </div>
    </div></section>
  );
}
function PageFaq({faq}){
  const[open,setOpen]=useState(0);
  return(
    <section className="pg-faq"><div className="wrap">
      <ScrambleText as="h2" className="pg-sec-h" text={faq.title}/>
      <div className="pg-faq-list">
        {faq.items.map((it,i)=>(
          <div className={`pg-faq-item ${open===i?"on":""}`} key={i}>
            <button className="pg-faq-q" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>
              <span>{it.q}</span><i className="pg-faq-ic" aria-hidden="true"/>
            </button>
            <AnimatePresence initial={false}>{open===i&&(
              <motion.div className="pg-faq-a" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3,ease:[.4,0,.2,1]}}>
                <p>{it.a}</p>
              </motion.div>)}</AnimatePresence>
          </div>
        ))}
      </div>
    </div></section>
  );
}
function ObjStage({b,i,total,lang}){
  const ref=useRef(null);const inView=useInView(ref,{once:true,margin:"-70px"});
  const{scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const ny=useTransform(scrollYProgress,[0,1],[28,-28]);
  const STEP={fr:"Étape",en:"Stage",de:"Schritt"}[lang]||"Étape";
  const w=100-i*5;
  return(
    <motion.div className="obj-stage" ref={ref} style={{maxWidth:w+"%"}}
      initial={{opacity:0,y:44}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.04}}>
      <motion.span className="obj-num" aria-hidden="true" style={{y:ny}}>{String(i+1).padStart(2,"0")}</motion.span>
      <span className="obj-eyebrow">{STEP} {String(i+1).padStart(2,"0")}</span>
      <h3>{b.h}</h3>
      <p>{b.p}</p>
      {b.items&&<div className="obj-kpis">{b.items.map((it,j)=><span className="obj-kpi" key={j}>{it}</span>)}</div>}
    </motion.div>
  );
}
function ObjectivesFunnel({blocks,lang}){
  return(
    <section className="pg-funnel-wrap"><div className="wrap">
      <div className="pg-funnel">
        {blocks.flatMap((b,i)=>{
          const stage=<ObjStage key={"s"+i} b={b} i={i} total={blocks.length} lang={lang}/>;
          if(i<blocks.length-1) return [stage,(
            <span key={"a"+i} className="obj-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg></span>
          )];
          return [stage];
        })}
      </div>
    </div></section>
  );
}
function PageView({route,lang,t}){
  const data=(PAGES[lang]&&PAGES[lang][route])||PAGES.fr[route];
  if(!data)return null;
  if(data.hub){
    return(<div className="pg" key={route+lang}>
      <ServicesHub data={data}/>
      <PageCTA data={data.cta}/>
      <Footer t={t}/>
    </div>);
  }
  const acc=SERVICE_ACCENT[route]||{a:"var(--cyan)",a2:"var(--violet)"};
  const CTX={fr:"Le contexte",en:"The context",de:"Der Kontext"}[lang]||"Le contexte";
  const BEN={fr:"Ce que vous y gagnez",en:"What you gain",de:"Was Sie gewinnen"}[lang]||"Ce que vous y gagnez";
  return(
    <div className="pg pg-svc" style={{"--acc":acc.a,"--acc2":acc.a2}} key={route+lang}>
      <PageHero data={data}/>
      {data.lead&&<ServiceStatement text={data.lead} acc={acc.a} acc2={acc.a2}/>}
      {data.context&&<ServiceContext label={CTX} text={data.context}/>}
      {data.benefits&&<ServiceBenefits benefits={data.benefits} title={BEN}/>}
      {data.method&&<PageMethod method={data.method}/>}
      {data.blocks&&<ObjectivesFunnel blocks={data.blocks} lang={lang}/>}
      {data.included&&<ServiceIncluded title={data.includedTitle||"Inclus"} items={data.included}/>}
      {data.proof&&<ServiceProof proof={data.proof}/>}
      {data.faq&&<PageFaq faq={data.faq}/>}
      <PageCTA data={data.cta}/>
      <Footer t={t}/>
    </div>
  );
}

function App(){
  const[lang,setLang]=useState("fr");const t=I18N[lang];
  const[route,setRoute]=useState(parseRoute);
  useEffect(()=>{const on=()=>{setRoute(parseRoute());window.scrollTo(0,0);if(window.__lenis)window.__lenis.scrollTo(0,{immediate:true});};
    window.addEventListener("popstate",on);return()=>window.removeEventListener("popstate",on);},[]);
  useEffect(()=>{ // titre + meta description dynamiques par page (SEO)
    document.title=seoTitle(route,lang);
    const desc = route==="home" ? HOME_DESC[lang] : ((PAGES[lang]&&PAGES[lang][route]&&PAGES[lang][route].intro)||HOME_DESC[lang]);
    let m=document.querySelector('meta[name="description"]');
    if(!m){m=document.createElement("meta");m.setAttribute("name","description");document.head.appendChild(m);}
    m.setAttribute("content",desc);
    const c=document.querySelector('link[rel="canonical"]');
    if(c)c.setAttribute("href","https://web-growth-production.up.railway.app"+(route==="home"?"/":"/"+route));
  },[route,lang]);
  const[loading,setLoading]=useState(true);
  const[rave,setRave]=useState(false);
  const[conciergeOpen,setConciergeOpen]=useState(false);
  const{scrollYProgress}=useScroll();
  const triggerRave=()=>{
    setRave(true);document.body.classList.add("rave");
    const colors=["#00E0FF","#FF2D9B","#7A3BFF","#C9FF3B","#FFB23A"];let n=0;
    const iv=setInterval(()=>{try{confetti({particleCount:45,spread:130,startVelocity:50,origin:{x:Math.random(),y:Math.random()*0.5},colors});}catch(_){}
      if(++n>12)clearInterval(iv);},280);
    setTimeout(()=>{document.body.classList.remove("rave");setRave(false);},6500);
  };
  useEffect(()=>{document.documentElement.lang=lang},[lang]);
  useEffect(()=>{document.body.classList.toggle("loading",loading);},[loading]);
  useEffect(()=>{ if(lowFX()) document.body.classList.add("lowfx"); },[]);
  useEffect(()=>{
    if(window.matchMedia("(hover: none)").matches) return; // garder le scroll natif tactile
    const lenis=new Lenis({lerp:.1,smoothWheel:true,wheelMultiplier:1});
    window.__lenis=lenis;
    let raf;const loop=t=>{lenis.raf(t);raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop);
    return()=>{cancelAnimationFrame(raf);lenis.destroy();window.__lenis=null;};
  },[]);
  useEffect(()=>{ // onde néon au clic des boutons
    const onClick=e=>{const btn=e.target.closest&&e.target.closest(".btn");if(!btn)return;
      const r=btn.getBoundingClientRect();const rp=document.createElement("span");rp.className="ripple";
      const d=Math.max(r.width,r.height)*2.2;rp.style.width=rp.style.height=d+"px";
      rp.style.left=(e.clientX-r.left-d/2)+"px";rp.style.top=(e.clientY-r.top-d/2)+"px";
      btn.appendChild(rp);setTimeout(()=>rp.remove(),650);};
    document.addEventListener("click",onClick);return()=>document.removeEventListener("click",onClick);
  },[]);
  useEffect(()=>{ // easter egg: RAVE MODE (Konami)
    const seq=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"];
    let idx=0;
    const onKey=e=>{const k=e.key.toLowerCase();
      if(k===seq[idx]){idx++;if(idx===seq.length){idx=0;triggerRave();}} else {idx=(k===seq[0])?1:0;}
    };
    window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);
  },[]);
  return(<>
    <AnimatePresence>{loading&&<Preloader key="pre" onDone={()=>setLoading(false)}/>}</AnimatePresence>
    <div className="grain"/><div className="scan"/>
    <motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/>
    <CustomCursor/>
    <RocketTop/>
    <MobileCTA t={t}/>
    <Concierge open={conciergeOpen} setOpen={setConciergeOpen} lang={lang}/>
    <CommandPalette t={t} lang={lang} setLang={setLang} openConcierge={()=>setConciergeOpen(true)} triggerRave={triggerRave}/>
    <AnimatePresence>{rave&&(
      <motion.div className="rave-toast" initial={{opacity:0,y:-20,scale:.8}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,scale:.8}}>⚡ RAVE MODE ⚡</motion.div>
    )}</AnimatePresence>
    <Header lang={lang} setLang={setLang} t={t}/>
    <div className="page-shake">
    {route==="home" ? (<>
    <Hero t={t}/>
    <Marquee items={KEYWORDS}/>
    <Manifesto t={t}/>
    <HorizontalServices t={t} lang={lang}/>
    <Marquee items={KEYWORDS} alt reverse/>
    <Approach t={t} lang={lang}/>
    <Work t={t} lang={lang}/>
    <Stats lang={lang}/>
    <section className="clients"><p className="lab">{t.cli_lab}</p><Marquee items={CLIENTS} gray/></section>
    <Contact t={t} lang={lang}/>
    <Footer t={t}/>
    </>) : (
    <PageView route={route} lang={lang} t={t}/>
    )}
    </div>
  </>);
}
const _rootEl=document.getElementById("root"); _rootEl.innerHTML=""; // retire le bloc SEO pré-rendu
createRoot(_rootEl).render(<App/>);
