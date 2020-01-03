const app = getApp();
Component({
  properties: {
    title: {
      type: String,
      value: '关于我们'
    },
    color: {
      type: String,
      value: '#000000'
    },
    back: {
      type: String,
      value: './left.png'
    }
  },
  data: {
    CustomBar: app.globalData.CustomBar,
    StatusBar: app.globalData.StatusBar,
  },
  methods: {
    back(){
      wx.navigateTo({
        delta: 1
      })
    }
  }
})