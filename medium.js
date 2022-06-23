const http = require("http");

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(
    "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Plute"
  );
  res.end();
}

http.createServer(onRequest).listen(3000);
