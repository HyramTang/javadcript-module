define(function (require) {
    const m3 = require('./modules/module3');
    require('./modules/module4');

    console.log(m3.msg);
});