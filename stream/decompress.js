'use strict';

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('temp.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('temp2.txt'));

console.log('文件解压完成');
