// 处理和转换文件路径
'use strict';

var path = require('path');


// 规范化字符串路径
// 多个斜杠会被替换成一个； 路径末尾的斜杠会被保留； Windows 系统上, 会使用反斜杠。
path.normalize('/foo/bar//baz/asdf/quux/..');    //   '\foo\bar\baz\asdf'


// 连接所有参数，组合完整的文件路径, 并且规范化得到的路径.  参数必须是字符串
path.join('foo', 'asdf', 'bar');   //    'foo\asdf\bar'


console.log(path.resolve( 'foo/bar/', '/tmp/file', '..', 'a/../subfile' ));    //    'C:\tmp\subfile'
// 遇到 / 重新加载路径

// 相当于:
//
// cd foo/bar         ==>    ../foo/bar
// cd /tmp/file/      ==>    ../tmp/file
// cd ..              ==>    ../tmp
// cd a/../subfile    ==>    ../tmp/subfile
// pwd
//

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 'C:\Users\Lenovo\Desktop\Node.js\path\wwwroot\static_files\gif\image.gif'



// 解析当前目录
var workDir = path.resolve('.');
//  'C:\Users\Lenovo\Desktop\Node.js\path'

// 当前目录+'pub'+'index.html'
var filePath = path.join(workDir,'pub','index.html');
//  'C:\Users\Lenovo\Desktop\Node.js\path\pub\index.html'
