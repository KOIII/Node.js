'use strict';

var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var result = buf1.compare(buf2);

if(result < 0) {
   console.log(buf1 + " 在 " + buf2 + "之前");
}else if(result == 0){
   console.log(buf1 + " 与 " + buf2 + "相同");
}else {
   console.log(buf1 + " 在 " + buf2 + "之后");
}

//  ABC在ABCD之前
