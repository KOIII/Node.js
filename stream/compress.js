'use strict';

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('temp.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('temp.txt.gz'));

console.log('文件压缩完成');
