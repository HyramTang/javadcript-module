// IIFE 放大模式（augmentation）
var module2=(function(mod){// 定义依赖别名
    var data2 = 'Hello, this is module <strong>two</strong>！';

    function foo() {
        document.write('foo()：' + data2 + '<br/>');
    }

    function bar() {
        document.write('bar()：' + data2 + '<br/>')
    }

    function module1Data(){
        document.write('output module1 data：' + mod.data + '<br/>')
    }

    return {
        foo,
        bar,
        module1Data
    }
})(module1);// 此处引入 module1 依赖