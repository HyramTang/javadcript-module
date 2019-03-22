var data2 = 'Hello, this is module <strong>two</strong>！';

function bar() { //与 module1.js 函数 bar() 冲突，覆盖 module1.js 函数
    document.write('bar()：' + data2 + '<br/>')
}