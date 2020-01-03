//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    // 登录
   

  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },


  
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    addText: '玩命加载中...',
    endText: '—————  没有更多啦  —————',
    sid: '',
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "icon/sy1.png",
          "selectedIconPath": "icon/sy2.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/merchat/merchat",
          "iconPath": "icon/lmsj1.png",
          "selectedIconPath": "icon/lmsj2.png",
          "text": "联盟商家"
        },
        {
          "pagePath": "/pages/middle/middle",
          "iconPath": "icon/hb.png",
          "isSpecial": true,
          "text": "红包"
        },
        {
          "pagePath": "/pages/store/store",
          "iconPath": "icon/sh1.png",
          "selectedIconPath": "icon/sh2.png",
          "text": "商城"
        },
        {
          "pagePath": "/pages/mine/mine",
          "iconPath": "icon/grzx1.png",
          "selectedIconPath": "icon/grzx2.png",
          "text": "个人中心"
        }
      ]
    }
  }
})