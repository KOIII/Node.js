'use strict';

var buf1 = new Buffer(256);
buf1.write('hello');    //  5

var buf2 = new Buffer(2);
buf2.write('hello');    //  2
