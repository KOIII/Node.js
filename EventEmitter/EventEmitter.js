'use strict';

var events = require('events');
var emitter = new events.EventEmitter();
// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

var listener1 = function(arg1,arg2) {
  console.log('listener1',arg1,arg2);
}
var listener2 = function(arg1,arg2) {
  console.log('listener2',arg1,arg2);
}

emitter.addListener('someEvent',listener1);
emitter.on('someEvent',listener2);
// addListener(event, listener) 和 on(event, listener)是一样的

var eventListeners = require('events').EventEmitter.listenerCount(emitter,'someEvent');
console.log( eventListeners + '个监听器监听someEvent事件' );

// 触发someEvent事件
emitter.emit( 'someEvent', 'hahaha', 666 );

emitter.removeListener('someEvent',listener1);
console.log("listener1 不再受监听");

// 触发someEvent事件
emitter.emit( 'someEvent', 'hahaha', 666 );

eventListeners = require('events').EventEmitter.listenerCount(emitter,'someEvent');
console.log( eventListeners + '个监听器监听someEvent事件' );

emitter.emit('error'); 
