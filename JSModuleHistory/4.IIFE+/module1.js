var module1 = (function () {
    var data1 = 'Hello, this is module <strong>one</strong>！';

    function foo() {
        document.write('foo()：' + data1 + '<br/>');
    }

    function bar() {
        document.write('bar()：' + data1 + '<br/>')
    }

    // 暴露 foo 函数和 data1 变量给外面
    return {
        foo,
        data:data1
    };
})();