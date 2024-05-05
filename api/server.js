// server.js
const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy instance
const proxy = httpProxy.createProxyServer();

// Proxy requests to the PHP server running on 127.0.0.1:8000
const server = http.createServer((req, res) => {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:8000'
    });
});

// Listen on port 3000
server.listen(3000);
