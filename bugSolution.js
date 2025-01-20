const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

process.on('uncaughtException', (err) => {
    const errorLog = `Error at ${new Date()}: ${err.stack}\n`;
    fs.appendFile('error.log', errorLog, (err) => {
        if (err) {
            console.error('Failed to log error:', err);
        }
    });
    console.error('An unexpected error occurred:', err);
    server.close(() => {
        console.log('Server closed gracefully.');
        process.exit(1);
    });
});

setTimeout(() => {
    console.log(undeclaredVariable);
}, 1000);