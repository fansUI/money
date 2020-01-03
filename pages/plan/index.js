const app = getApp();
let that = null;

Page({
    data: {
        lists: [
            {
                name: '红包套餐一',
                desc1: '300红包',
                desc2: '100积分',
                desc3: '100红包',
            },
            {
                name: '红包套餐一',
                desc1: '300红包',
                desc2: '100积分',
                desc3: '100红包',
            },
            {
                name: '红包套餐一',
                desc1: '300红包',
                desc2: '100积分',
                desc3: '100红包',
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