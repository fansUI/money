const app = getApp();
let that = null;

Page({
    data: {
        lists: [
            {
                name: '所属权',
                info: 'XXX'
            },
            {
                name: '联系邮箱',
                info: 'XXX'
            },
            {
                name: '客服电话',
                info: 'XXX'
            },
            {
                name: '版本号',
                info: 'XXX'
            }
        ]
    },
    onLoad(){
        that = this;
        that.allInit();
    },
    allInit(){

    },
    onShareAppMessage(){

    }
})