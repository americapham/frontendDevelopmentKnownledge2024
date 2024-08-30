const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	const rootContentPath = '../html_css_javascript';
	
	
  let filePath = rootContentPath + req.url;
  if (filePath === rootContentPath +'/') {
 filePath = rootContentPath + '/index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
 '.html': 'text/html',
 '.css': 'text/css',
 '.js': 'text/javascript',
 '.json': 'application/json',
 '.png': 'image/png',
 '.jpg': 'image/jpg',
 '.gif': 'image/gif',
 '.svg': 'image/svg+xml',
  }[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
 if (err) {
   if (err.code === 'ENOENT') {
     res.writeHead(404);
     res.end('File not found');
   } else {
     res.writeHead(500);
     res.end('Server error');
   }
 } else {
   res.writeHead(200, { 'Content-Type': contentType });
   res.end(content, 'utf-8');
 }
  });
  console.log(req.url);
}).listen(3000);