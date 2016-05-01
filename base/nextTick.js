process.nextTick(function(){
  console.log('nextTick callback');
});

process.on('exit',function(code){
  console.log('about to exit with code: ' + code);
});

console.log('nextTick was set!');

//  nextTick was set!
//  nextTick callback!
//  about to exit with code: 0
