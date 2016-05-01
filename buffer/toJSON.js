'use strict';

var buf0 = new Buffer('hello','utf-8');
buf0.toJSON();        //  { type:'Buffer', data:[104,101,108,111] }

var buf1 = new Buffer('hello','utf8');
buf1.toJSON();        //  { type:'Buffer', data:[104,101,108,111] }

var buf2 = new Buffer('hello','ascii');
buf2.toJSON();        //  { type:'Buffer', data:[104,101,108,111] }

var buf3 = new Buffer('hello','utf16le');
buf3.toJSON();        //  { type:'Buffer', data:[104,0,101,0,108,0,111,0] }

var buf4 = new Buffer('hello','ucs2');
buf4.toJSON();       //  { type:'Buffer', data:[104,0,101,0,108,0,111,0] }

var buf5 = new Buffer('hello','base64');
buf5.toJSON();        //  { type:'Buffer', data:[133,233,101] }

// var buf6 = new Buffer('hello','hex');
// console.log( buf6.toJSON() );
// { type:'Buffer', data:[104,101,108,111] }
