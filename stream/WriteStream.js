'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('temp.txt','utf-8');
ws1.write('使用stream写入文本数据...\n');
ws1.write('END.');
ws1.end();
ws1.on('finish',function(){
  console.log('ws1写入完成');
});
ws1.on('error',function(err){
  console.log(err.stack);
});

var ws2 = fs.createWriteStream('temp.txt');
ws2.write(new Buffer('使用stream写入二进制'));
ws2.write(new Buffer('END.','utf-8'));
ws2.end();
ws2.on('finish',function(){
  console.log('ws2写入完成');
});
ws2.on('error',function(err){
  console.log(err.stack);
});


//  所有可以写入的流都继承自 stream.Writable
