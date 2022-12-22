var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Connection-Type': 'text/html'});
    response.end('<h1>Hello World from Node Server</h1>');
}).listen(3000);
console.log('server node active url: http://IP::3000');
