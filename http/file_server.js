'use strict';

var fs = require('fs');
var url = require('url');
var path = require('path');
var http = require('http');

console.log( process.argv[0] );    //  C:\Program Files\node.js\node.exe
console.log( process.argv[1] );    //  C:\Users\Lenovo\Desktop\Node.js\http\file_server.js
console.log( process.argv[2] );    //  C:\Users\Lenovo\Desktop\Node.js\http\src

var root = path.resolve(process.argv[2] || '.');    //  C:\Users\Lenovo\Desktop\Node.js\http\src
                                                    //  process.argv[2] 获取命令行的第三个参数
                                                    //  '.'  默认是当前目录
console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    console.log(request.url);     //  /index.html
    var pathname = url.parse(request.url).pathname;     //  /index.html
    var filepath = path.join(root, pathname);    //  C:\Users\Lenovo\Desktop\Node.js\http\src\index.html
    fs.stat(filepath, function (err, stats) {
        if ( !err && stats.isFile() ) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);   //  把 index.html响应给客户端  really 重要
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
