'use strict';

var http = require('http');

var options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
}

var req = http.request(options,function(response){
  var body = '';
  response.on('data',function(data){
    body += data;
  });
  response.on('end',function(){
    console.log(body);
  });
});

req.end();
