const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello from Railway 🚀</h1><p>Server is live at ${new Date().toLocaleTimeString()}</p>`);
});

server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
