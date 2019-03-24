define(function (require) {
    const m3 = require('./module3');
    require('./module4');

    console.log(m3.msg);
});