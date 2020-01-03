// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
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
            "iconPath": "icon/sc1.png",
            "selectedIconPath": "icon/sc2.png",
            "text": "商城"
          },
          {
            "pagePath": "/pages/mine/mine",
            "iconPath": "icon/grzx1.png",
            "selectedIconPath": "icon/grzx2.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
