const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3005;
const BUILD_DIR = path.join(__dirname, 'build');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // Remove query strings
  let filePath = path.join(BUILD_DIR, decodeURIComponent(urlPath));

  fs.stat(filePath, (err, stats) => {
    // If it's a directory, try serving index.html inside it
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      fs.stat(filePath, (err2, stats2) => {
        if (err2 || !stats2.isFile()) {
          serveSPA(res);
          return;
        }
        respondWithFile(filePath, res);
      });
    } else if (!err && stats.isFile()) {
      respondWithFile(filePath, res);
    } else {
      // Fallback to index.html for React Router SPA routes
      serveSPA(res);
    }
  });
});

function serveSPA(res) {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  fs.stat(indexPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    respondWithFile(indexPath, res);
  });
}

function respondWithFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 
    'Content-Type': contentType,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  fs.createReadStream(filePath).pipe(res);
}

server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
