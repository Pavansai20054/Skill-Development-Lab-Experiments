const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('visit', (url) => console.log(`Visited: ${url}`));

http.createServer((req, res) => {
    myEmitter.emit('visit', req.url);

    const data = {
        message: "Welcome to Node.js server!",
        systemInfo: {
            platform: os.platform(),
            arch: os.arch(),
            freeMem: os.freemem(),
        },
        pathInfo: {
            dir: path.dirname(__filename),
            file: path.basename(__filename),
        },
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}).listen(3000, () => console.log("Server running at http://localhost:3000"));