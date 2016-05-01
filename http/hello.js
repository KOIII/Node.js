'use strict';

var http = require('http');

// 创建 http server 并传入回调函数
var server = http.createServer(function(request,response){
  // 回调函数接受 request和 response对象
  // 获得 HTTP请求的 method和 url
  console.log(request.method+':'+request.url);

  // 将 HTTP响应 200写入 response，同时设置 Contenttype
  response.writeHead(200,{'Conten-Type':'text/html'});

  // 将 HTTP响应的 HTML内容写入 response:
  response.end('<h1>Hello world!</h1>');
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
