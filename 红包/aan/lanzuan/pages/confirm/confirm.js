var app = getApp();var _page=0;//当前分页页码

Page({  
  /**
   * 页面的初始数据
   */
  data: {  
    confirm_13:'行者商城',//服务器文本
    confirm_15:'http://wx.ymznkf.com/project/8576/tabbarDemo/confirm/images/confirm_15_15.jpg',//服务器文本
    confirm_16:'苏泊尔智能球服电饭煲4L电饭锅家用正品',//服务器文本
    confirm_18:'1',//服务器文本
    confirm_20:'￥50.50',//服务器文本
    confirm_45:'0',//服务器文本
    confirm_57:'0.00',//服务器文本
    confirm_65:'￥200.00',//服务器文本
    confirm_68:'￥0.3',//服务器文本
    confirm_71:'￥0',//服务器文本
    confirm_73:'￥48.20',//服务器文本
 
    //系统默认参数
    clientHeight:0,//滑动门计算高度使用
    apiUrl:'534',//后端接口地址
    id:'',//传值使用,方便存在本地的locakStorage  
    del_id:'',//方便存在本地的locakStorage  
    response:'' //存取返回数据  
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //app.checkLogin();//检查登录
    //app.getLaction();//得到gps

    //检测有没有传入id参数
    if (options.id != null && options.id !=""){
      this.setData({
        id: options.id
      })
    }   
    //执行初始化,需要用的时候，可以把注释取掉
    //this.dataRefresh("init");

    //滑动门自适应swiper高度
    let that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示 需要用的时候，可以把注释取掉
   */
  onShow: function () {
	//刷新页面
	//this.dataRefresh("init");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作,需要用的时候，可以把注释取掉
   */
  onPullDownRefresh: function () {
    //// 显示顶部刷新图标  
    //_page=0;
    //wx.showNavigationBarLoading();  
    //this.dataRefresh("init");
  },

  /**
   * 页面上拉触底事件的处理函数,需要用的时候，可以把注释取掉
   */
  onReachBottom: function () {
    //var that = this;
    //// 显示加载图标  
    //wx.showLoading({
    //  title: '玩命加载中',
    //})
    //// 页数+1  
    //_page = parseInt(_page) + 1;  

    //this.dataRefresh("init");
  },


  /**
   * ---------------------------------------
   */

  /**
* confirm_5_5处理函数
*/
confirm_5_5_click:function(e){

   wx.navigateTo({
   url:'/pages/address/address'
  })
},

/**
* confirm_8_8处理函数
*/
confirm_8_8_click:function(e){

},

/**
* confirm_15_15处理函数
*/
confirm_15_15_click:function(e){

},

/**
* confirm_41_41处理函数
*/
confirm_41_41_click:function(e){

},

/**
* an_46处理函数
*/
an_46_click:function(e){

},

/**
* confirm_54_54处理函数
*/
confirm_54_54_click:function(e){

},

/**
* confirm_58_58处理函数
*/
confirm_58_58_click:function(e){

},

/**
* btn_a_74处理函数
*/
btn_a_74_click:function(e){

            this.dataRefresh("btn_a_click");
},


 
  /**
   * ---------------------------------------
   */

  //刷新数据
  dataRefresh:function(_action) {
    //提交到服务器
    var that = this
    wx.request({
      url: this.data.apiUrl+'{server_code_file_path}',//后端接口地址，需要改成自己的接口地址
      data: {
        action: _action,//上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
        uid: app.data.uid,//上传用户id,在登录中获得
	//上传页面中的变量
        //定义变量---start
	
        //定义变量---end
        id: that.data.id,//上传id值，后端可以根据此值来操作当前id
        del_id: that.data.del_id,//在列表中删除按钮选中时，上传到有后端，进行删除操作
        _page:_page
      },
      method: 'GET',
      success: function (res) {//后端返回数据
        console.log(res.data);
        var tmp = res.data;

        //初始化，对页面上的控件进行赋值操作
        if(_action=="init"){
		that.setData({

			response: res
		})
	}



	that.setData({
		confirm_13: tmp.confirm_13,
confirm_15: tmp.confirm_15,
confirm_16: tmp.confirm_16,
confirm_18: tmp.confirm_18,
confirm_20: tmp.confirm_20,
confirm_45: tmp.confirm_45,
confirm_57: tmp.confirm_57,
confirm_65: tmp.confirm_65,
confirm_68: tmp.confirm_68,
confirm_71: tmp.confirm_71,
confirm_73: tmp.confirm_73,

		response: res
        })

	//如果后端有返回消息，则弹出消息提示
	if (tmp.message != null && tmp.message != "") {
          wx.showToast({
            title: tmp.message,
            icon: 'none',
            duration: 2000
          })
        }
        
	//如果后端有返回页码，则更改当前页码
	if(tmp._page!=null && tmp._page!=""){
	  _page=tmp._page;
	}
	
        // 隐藏导航栏加载框  
        wx.hideNavigationBarLoading();
        // 停止下拉动作  
        wx.stopPullDownRefresh();  

        // 隐藏加载框  
        wx.hideLoading();  

      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
    })
  },

   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})  

