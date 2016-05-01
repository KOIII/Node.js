'use strict';

function say(word){
  console.log(word);
}

function execute(someFunction,value) {
  someFunction(value);
}

execute(say,'hello');

// 匿名函数
execute(function(word){
  console.log(word);
},'hello');


// 向 createServer 函数传递了一个匿名函数
var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello world!');
  response.end();
}).listen(8080);

function onRequest(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello world!');
  response.end();
}
http.createServer(onRequest).listen(3000);
