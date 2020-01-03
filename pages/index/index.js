const app = getApp();
let that = null;

Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    show: true,
    menus: [
      {
        icon: '/images/index/hongbaosc_icon.png',
        name: '红包商城'
      },
      {
        icon: '/images/index/hongbaojh_icon.png',
        name: '红包计划'
      },
      {
        icon: '/images/index/hongbaomiaosha_icon.png',
        name: '红包秒杀'
      },
      {
        icon: '/images/index/jfsc_icon.png',
        name: '积分商城'
      },
      {
        icon: '/images/index/xyhb_icon.png',
        name: '幸运红包'
      },
      {
        icon: '/images/index/hbdb_icon.png',
        name: '红包夺宝'
      },
      {
        icon: '/images/index/xszn_icon.png',
        name: '新手指南'
      },
      {
        icon: '/images/index/gengduo_icon.png',
        name: '更多'
      }
    ],
    goods: new Array(6).fill({
      thumb: '/images/index/hongbaosc_icon.png',
      price: 2000,
      reword: 0.01,
      origin: 185.00,
      name: 'iPhone X手机...'
    })
  },
  onLoad(){

  },
  onShareAppMessage(){
    
  }
})