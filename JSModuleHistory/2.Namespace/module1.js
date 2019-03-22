var module1={
    data:'Hello, this is module <strong>one</strong>',
    foo:function(){
        document.write('foo()：' + this.data + '<br/>');
    },
    bar:function(){
        document.write('bar()：' + this.data + '<br/>')
    }
}