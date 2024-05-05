// server.js
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: 'http://127.0.0.1:8000' // Replace with the address of your PHP server
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
