// link to prebuilt http lirary that ships with node
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200); // status ok
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');
