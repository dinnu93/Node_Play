var http = require('http');

var server = http.createServer();

server.once('connection', function(stream){
    console.log("Server connected on localhost port 4000..."); 
});

server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url ;
    if(url == '/'){
	res.write("<h1>Hello, World</h1>");
    }else{
	res.write('<h1>Hello, ' + url.slice(1) + '</h1>');
    }
    res.end();
    console.log('Requested : ' + url);
});


server.listen(4000);
