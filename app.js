let that = null;
App({
  onLaunch() {
    that = this;
    that.getSystemInfo();
  },
  globalData: {
    CustomBar: null,
    StatusBar: null,
  },
  getSystemInfo() {
    let systemInfo = wx.getSystemInfoSync();
    this.globalData.StatusBar = systemInfo.statusBarHeight;
    let capsule = wx.getMenuButtonBoundingClientRect();
    if (capsule && capsule.bottom && capsule.top) {
      this.globalData.CustomBar = capsule.bottom + capsule.top - systemInfo.statusBarHeight;
    } else {
      this.globalData.CustomBar = systemInfo.statusBarHeight + 50;
    }
    console.log(this.globalData)
    return this.globalData.CustomBar;
  },
})