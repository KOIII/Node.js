'use strict';

//  POST请求的内容全部的都在请求体中，http.ServerRequest并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
  var post = '';    //  暂存请求体的信息
  req.on('data',function(chunk){
    post += data;   //  通过 req的 data事件监听函数，每当 ### 接受到请求体的数据 ### ，就累加到 post变量中
  });
  req.on('end',function(){
    post = querystring.parse(post);    //  在 end事件触发后，通过 querystring.parse将 post解析为真正的 POST请求格式，然后向客户端返回。
    res.end(util.inspect(post));
  });
}).listen(8080);
