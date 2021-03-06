var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    if(pathname === '/') {
      fs.readFile(`data/${title}`, 'utf8', function(err, description){
        if(title === undefined & Object.keys(queryData).length == 0){
          title = 'Welcome';
          description = 'Hello, Node.js';
        }
        if(description !== undefined){
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            <link rel="icon" href="data:,">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <div id="grid">
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <div id="article">
                <h2>${title}</h2>
                <p>${description}
                </p>
              </div>
            </div>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
          } else {
            response.writeHead(404);
            response.end('<h1>Not found</h1>');
          }
        });
      } else {
      response.writeHead(404);
      response.end('<h1>Not found</h1>');
    }
});
app.listen(3000);