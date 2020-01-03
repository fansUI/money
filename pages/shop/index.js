const app = getApp();
let that = null;

Page({
  data: {
    lists: [
      {
        icon: '/images/shop/dianpugl_icon.png',
        name: '店铺管理'
      },
      {
        icon: '/images/shop/sjzd_icon.png',
        name: '商家做单'
      },
      {
        icon: '/images/shop/zhanghu_icon.png',
        name: '账户'
      }, {
        icon: '/images/shop/kefu_icon.png',
        name: '客服'
      },
      {
        icon: '/images/shop/sjzhb_icon.png',
        name: '商家转红包'
      },
      {
        icon: '/images/shop/hbjl_icon.png',
        name: '红包记录'
      }, {
        icon: '/images/shop/xinxitonggao_icon.png',
        name: '信息通告'
      },
      {
        icon: '/images/shop/shezhi_icon.png',
        name: '设置'
      },
      {
        icon: '/images/mine/my_more_icon.png',
        name: '更多'
      },
    ]
  },
  onLoad(){

  },
  onShareAppMessage(){
    
  }
})