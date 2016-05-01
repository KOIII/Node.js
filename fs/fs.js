'use strict';

var fs = require('fs');
fs.readFile('temp.txt','utf-8',function(err,data){  //  temp.txt文件必须在当前目录下，且文件编码为utf-8
  if(err){
    console.log( err );
  }
  else {
    console.log(data);
  }
});

fs.readFile('000.jpg',function(err,data){
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
    console.log(data.length + 'bytes');
  }
});


var data = "hello,Node.js";
fs.writeFile('temp.txt',data,function(err){
  if(err) {
    console.log(err);
  }
  else {
    console.log('ok');
  }
});

fs.stat('temp.txt',function(err,stat){  //  **************它返回一个Stat对象************
  if(err) {
    console.log(err);
  }
  else {
    console.log('isFile:' + stat.isFile());  // 是否是文件
    console.log('isDirectory:' + stat.isDirectory());
  }
  if(stat.isFile()) {
    console.log('size:' + stat.size);
    console.log('birth time:' + stat.birthtime);
    console.log('modifitied time:' + stat.mtime);
  }
});
// isFile: true
// isDirectory: false
// size: 0
// birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
// modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)
// ok
// <Buffer ff d8 ... >
// 34483bytes
// hello,Node.js
