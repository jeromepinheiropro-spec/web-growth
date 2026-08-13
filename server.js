// Serveur statique minimal (zéro dépendance) pour Railway / tout hébergeur Node.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const HTML = fs.readFileSync(path.join(__dirname, "index.html"));

const server = http.createServer((req, res) => {
  // Site mono-page : toutes les routes renvoient index.html
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=300",
  });
  res.end(HTML);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Web Growth en ligne sur le port " + PORT);
});
