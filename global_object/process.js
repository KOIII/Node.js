console.log('current js file: ' + __filename);    //  C:\Users\Lenovo\Desktop\Node.js\base\process.js

console.log('current js dir: ' + __dirname);    //  C:\Users\Lenovo\Desktop\Node.js\base

process.name = 'Sample Nodejs';

console.log('arguments: ' + JSON.stringify(process.argv));    //  ["C:\Program Files\node.js\node.exe","C:\Users\Lenovo\Desktop\Node.js\base\process.js"]

console.log('cwd: ' + process.cwd());    //  C:\Users\Lenovo\Desktop\Node.js\base

process.chdir('../http');
console.log('cwd: ' + process.cwd());    //  C:\Users\Lenovo\Desktop\Node.js\http
