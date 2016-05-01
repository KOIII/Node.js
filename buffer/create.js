'use strict';

var buf1 = new Buffer(10);
var buf2 = new Buffer([10,20,30,40,50]);
var buf3 = new Buffer('www.runoob.com','uft-8');
// utf-8 是默认的编码方式，
// 此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"
