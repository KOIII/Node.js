'use strict';

var fs = require('fs');

var rs = fs.createReadStream('temp.txt');
var ws = fs.createWriteStream('temp_copy.txt');

rs.pipe(ws);

//  默认情况下，当 Readable流的数据读取完毕，end事件触发后，将自动关闭 Writable流
//  如果不希望自动关闭 Writable流，需要传入参数：
readable.pipe(write,{end:false});
