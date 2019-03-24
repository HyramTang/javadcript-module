define(function () {
  let msg = 'hello world requireJS';

  function dataServer() {
    return msg.toUpperCase();
  }
  //暴露这个模块
  return dataServer;
});