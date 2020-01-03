Component({
  properties: {
    current: {
      type: Number,
      value: 0,
    }
  },
  data: {
    // color: '#B0AFB0',
    // selectedColor: '#FF3E00',
    list: [{
        pagePath: '/pages/index/index',
        text: '首页',
        iconPath: '/images/tab/sywxz_icon.png',
        selectedIconPath: '/images/tab/syxz_icon.png'
      },
      {
        pagePath: '/pages/business/index',
        text: '联盟商家',
        iconPath: '/images/tab/lmsxwxz_icon.png',
        selectedIconPath: '/images/tab/lmsjxz_icon.png'
      },
      {
        pagePath: '/pages/money/index',
        text: '首页',
        iconPath: '/images/tab/sywxz_icon.png',
        selectedIconPath: '/images/tab/syxz_icon.png'
      },
      {
        pagePath: '/pages/shop/index',
        text: '商城',
        iconPath: '/images/tab/scwxz_icon.png',
        selectedIconPath: '/images/tab/scxz_icon.png'
      },
      {
        pagePath: '/pages/mine/index',
        text: '个人中心',
        iconPath: '/images/tab/grzxwxz_icon.png',
        selectedIconPath: '/images/tab/grzxxz+icon.png'
      }
    ]
  },
  methods: {
    changeTabbar(e){
      console.log(888)
      let index = e.currentTarget.dataset.index;
      console.log(index, typeof(index))
      wx.redirectTo({
        url: this.data.list[index].pagePath,
      })
    }
  }
})