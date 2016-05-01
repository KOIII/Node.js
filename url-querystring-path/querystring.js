'use strict';


var querystring = require('querystring');

//    对象  ===>  字符串
querystring.stringify({foo: 'bar', baz: 'qux'});            //  'foo=bar&baz=qux'
querystring.stringify({foo: 'bar', baz: 'qux'},';',':');    //  'foo:bar;baz:qux'

//   字符串  ===>  对象
querystring.parse('foo=bar&baz=qux&baz=quux&corge');        //  { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
