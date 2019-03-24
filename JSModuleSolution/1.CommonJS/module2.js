// 引用依赖模块
const m1 = require('./module1');

function getHome(url) {
    console.log('主页地址为：' + url);
    return 'homeData';
}

function getContact(url){
    console.log('联系地址为：'+url);
    return 'contactData';
}

const homeData=getHome(m1.homeUrl);
const contactData=getContact(m1.contactUrl);

// 暴露模块内容
module.exports={
    homeData,
    contactData
}