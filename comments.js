//create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var comments = [];
var server = http.createServer(function(request, response){
  var parseUrl = url.parse(request.url, true);
  var path = parseUrl.pathname;
  if(path === '/post'){
    var comment = parseUrl.query;
    comments.push(comment);
  }
  else if(path === '/get'){
    response.end(JSON.stringify(comments));
  }
  else {
    fs.readFile(__dirname + '/index.html', function(err, data){
      response.end(data);
    });
  }
});
server.listen(3000);
console.log('Server is running at http://localhost:3000/');


