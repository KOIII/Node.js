'use strict';

var buf1 = new Buffer('hello');
var buf2 = new Buffer('world');
var buf3 = Buffer.concat([buf1,buf2]);    //  <Buffer 68 65 6c 6c 6f 77 6f 72 6c 64>
buf3.toString();  //  helloworld
