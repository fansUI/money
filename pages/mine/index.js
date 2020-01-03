const app = getApp();
let that = null;

Page({
  data: {
    orders: [
      {
        icon: '/images/mine/my_daifukuan_icon.png',
        name: '待付款'
      },
      {
        icon: '/images/mine/my_daifukuan_icon.png',
        name: '待发货'
      },
      {
        icon: '/images/mine/my_daishouhuo_icon.png',
        name: '待收货'
      },
      {
        icon: '/images/mine/my_wangc_icon.png',
        name: '已完成'
      }
    ],
    lists: [
      {
        icon: '/images/mine/my_xiangxia_icon.png',
        name: '线下订单'
      },
      {
        icon: '/images/mine/my_hongbao_icon.png',
        name: '红包发送'
      },
      {
        icon: '/images/mine/my_jifen_icon.png',
        name: '积分记录'
      },
      {
        icon: '/images/mine/my_zhanghu_icon.png',
        name: '账户'
      },
      {
        icon: '/images/mine/my_shengqing_icon.png',
        name: '申请店铺'
      },
      {
        icon: '/images/mine/my_wodetuandui_icon.png',
        name: '我的团队'
      },
      {
        icon: '/images/mine/my_tuandui_icon.png',
        name: '团队红包'
      },
      {
        icon: '/images/mine/my_tuig_icon.png',
        name: '推广奖励'
      },
      {
        icon: '/images/mine/my_dailis_icon.png',
        name: '代理商'
      },
      {
        icon: '/images/mine/my_notice_icon.png',
        name: '信息通知'
      },
      {
        icon: '/images/mine/my_kefu_icon.png',
        name: '客服'
      },
      {
        icon: '/images/mine/my_shezhi_icon.png',
        name: '设置'
      },
      {
        icon: '/images/mine/my_more_icon.png',
        name: '更多'
      }
    ]
  },
  onLoad(){

  },
  onShareAppMessage(){
    
  }
})