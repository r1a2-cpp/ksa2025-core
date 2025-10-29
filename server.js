const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // Handle only the root path "/"
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Railway 🚀</h1><p>Your app is live!</p>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
