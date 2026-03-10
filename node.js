// Load the HTTP module
const http = require('http');


// Define the hostname and port
const hostname = 'localhost';
const port = 3030;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js running on port 3030!');
});

// Start listening
server.listen(port, hostname, () => {
  console.log("yoganandas Node.js Server Example");
  console.log(`Server running at http://${hostname}:${port}/`);
});