'use strict';

var buf1 = new Buffer('asdfghj');
var buf2 = buf1.slice();
buf2.toString();        //  'asdfghj'

var buf3 = buf1.slice(2);
buf3.toString();        //  'dfghj'

var buf4 = buf1.slice(2,3);
buf4.toString();        //  'd'
