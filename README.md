# Web Growth — site vitrine

Landing one-page trilingue (FR / EN / DE) pour Web Growth, agence de communication digitale au Luxembourg.
Stack : React 19 + Framer Motion, effets WebGL (révélation par l'eau, plasma néon), tsParticles, Lenis (smooth scroll), tilt 3D, concierge IA, command palette. Compilé en un seul fichier `index.html` auto-suffisant, servi par un petit serveur Node sans dépendance.

## Lancer en local

```bash
npm install      # installe les dépendances de build
npm run build    # régénère index.html à partir de src/
npm start        # sert le site sur http://localhost:3000
```

Le site livré (`index.html`) est déjà compilé : `npm start` seul suffit pour le voir.

## Déployer sur Railway

1. Pousse ce dossier sur GitHub (voir plus bas).
2. Sur [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo** → choisis ce dépôt.
3. Railway détecte Node automatiquement et lance `npm start` (défini dans `railway.json`). Le site écoute sur `process.env.PORT`.
4. Onglet **Settings → Networking → Generate Domain** pour obtenir une URL publique.
5. (Domaine perso) **Settings → Custom Domain** → ajoute `webgrowth.lu` et suis les enregistrements DNS indiqués.

## Pousser sur GitHub

```bash
git remote add origin https://github.com/<ton-user>/web-growth.git
git branch -M main
git push -u origin main
```

## Structure

```
index.html        # site compilé, auto-suffisant (servi tel quel)
server.js         # serveur statique Node (zéro dépendance)
package.json      # scripts start / build
railway.json      # config de déploiement Railway
build.mjs         # compile src/ -> index.html (esbuild)
gen_reveal.py     # (optionnel) régénère l'image révélée par l'effet eau
src/
  app.jsx         # toute l'app React
  water-reveal.js # module WebGL de l'effet eau
  revealImg.js    # image révélée (data URL)
styles.css        # styles
```

## À personnaliser

- Coordonnées : `hello@webgrowth.lu`, téléphone, adresse (dans `src/app.jsx`).
- Réalisations : remplacer les images/études de cas placeholder.
- Liens réseaux sociaux (footer).
