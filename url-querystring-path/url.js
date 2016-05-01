'use strict';
var http = require("http");
var url = require('url');
var querystring = require('querystring');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: 'user:pass',
//   host: 'host.com:8080',
//   port: '8080',
//   hostname: 'host.com',
//   hash: '#hash',
//   search: '?query=string',
//   query: 'query=string',
//   pathname: '/path/to/file',
//   path: '/path/to/file?query=string',
//   href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }

console.log(url.parse('http://www.runoob.com/nodejs/nodejs-router.html'));
// Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.runoob.com',
//   port: null,
//   hostname: 'www.runoob.com',
//   hash: '#hash',
//   search: null,
//   query: null,
//   pathname: '/nodejs/nodejs-router.html',
//   path: '/nodejs/nodejs-router.html',
//   href: 'http://www.runoob.com/nodejs/nodejs-router.html' }


var string = 'http://localhost:8888/start?foo=bar&hello=world';
console.log( url.parse(string).query );        //   foo=bar&hello=world

console.log( url.parse(string).pathname );     //   /start
