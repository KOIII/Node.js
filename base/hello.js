'use strict';

var s = "hello";

function hello() {
    console.log('Hello, world!');
}

function greet(name) {
  console.log(s + ', ' + name + '!');
}

module.exports = {
    variable: 3,
    hello: hello,
    greet: greet,
    temp: function(ss){
      console.log(ss);
    }
};
