'use strict';

var fs = require('fs');

try {
  var data = fs.readFileSync('temp.txt', 'utf-8');
  console.log(data);
} catch (err) {
  console.log(err);
}

try {
  fs.writeFileSync('temp.txt', 'hello');
  console.log('ok');
} catch (err) {
  console.log(err);
}

try {
  var statInfo = fs.statSync('temp.txt');
  console.log(statInfo.isFile());
}
catch(err){
  console.log(err);
}
