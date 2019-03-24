define(function (require, exports, module) {
    /*
      require: 引入依赖模块
      exports: 暴露模块
      module: 暴露模块
     */
    const msg = 'moduleone';

    function getMsg() {
        console.log('module1 getMsg() ' + msg);
        return msg;
    }
    //暴露模块
    module.exports = getMsg;
});