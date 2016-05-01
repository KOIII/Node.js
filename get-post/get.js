'use strict';

//  GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
  res.writeHead(200,{'Conten-Type':'text/plain'});
  res.end(util.inspect(url.parse(req.url,true)));    //  query: { name: 'w3c', email: 'w3c@w3cschool.cc' }
                                      // false       //  query: 'name=w3c&email=w3c@w3cschool.cc'
}).listen(8080);

// 在浏览器中访问  http://localhost:8080/user?name=w3c&email=w3c@w3cschool.cc
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=w3c&email=w3c@w3cschool.cc',
//   query: { name: 'w3c', email: 'w3c@w3cschool.cc' },
//   pathname: '/user',
//   path: '/user?name=w3c&email=w3c@w3cschool.cc',
//   href: '/user?name=w3c&email=w3c@w3cschool.cc' }
