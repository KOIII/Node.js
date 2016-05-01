'use strict';

console.log( __filename );
//  C:\Users\Lenovo\Desktop\Node.js\global_object\main.js

console.log( __dirname );
//  C:\Users\Lenovo\Desktop\Node.js\global_object

var printHello = function() {
  console.log('hello');
}

var t = setTimeout( printHello, 2000 );
var c = setTimeout( clearTimeout(t), 1000) ;



console.log('sha%dasfho',2929);

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);
