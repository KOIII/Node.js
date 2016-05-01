'use strict';

var fs = require('fs');

// 打开一个流
var rs = fs.createReadStream('temp.txt','utf-8');
// var rs = fs.createReadStream('temp.txt');
// rs.setEncoding('UTF8');

rs.on('data',function(chunk){
  console.log('DATA1');
  console.log(chunk);
});
rs.on('data',function(chunk){
  console.log('DATA2');
  console.log(chunk);
});

rs.on('end',function(){
  console.log('END.');
});

// rs.on('error',function(err){
//   console.log(err.stack);
// });

console.log('程序执行完毕');

// -----------  SUCCESS  ------------ //
// 程序执行完毕
// DATA1
// 使用stream写入文本数据...
// DATA2
// 使用stream写入文本数据...
// END.

// -----------  ERROR事件  ---------- //
// 程序执行完毕
// Error: ENOENT: no such file or directory, open ...
//      at Error <native>

// -----------  ERROR  ------------- //
// 程序执行完毕
// events.js:141
//       throw er; // Unhandled 'error' event
// 
// Error: ENOENT: no such file or directory, open ...
//      at Error <native>


//  所有可以读取数据的流都继承自 stream.Readable
