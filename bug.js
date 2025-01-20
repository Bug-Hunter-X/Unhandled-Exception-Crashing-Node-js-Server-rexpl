const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

//Simulate unexpected error
process.on('uncaughtException', (err) => {
    console.error('An unexpected error occurred:', err);
    //Improper way of handling errors causing server to crash without proper shutdown
    process.exit(1);
});

setTimeout(() => {
    //Simulate unexpected error
    console.log(undeclaredVariable);
}, 1000);