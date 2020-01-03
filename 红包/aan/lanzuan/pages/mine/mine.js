var app = getApp();var _page=0;//当前分页页码

Page({  
  /**
   * 页面的初始数据
   */
  data: {  
    info_name:'用户昵称',//服务器文本
    jf:'23678',//服务器文本
    hb:'1428',//服务器文本
    dsfhb:'1428',//服务器文本
    mine_190:'ID:',//服务器文本
 
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
    app.editTabbar();
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
* info_id_8处理函数
*/
info_id_8_click:function(e){

   wx.navigateTo({
   url:'/pages/landing/landing'
  })
},

/**
* mine_9_9处理函数
*/
mine_9_9_click:function(e){

},

/**
* mine_10_10处理函数
*/
mine_10_10_click:function(e){

},

/**
* mine_37_37处理函数
*/
mine_37_37_click:function(e){

},

/**
* mine_68_68处理函数
*/
mine_68_68_click:function(e){

   wx.navigateTo({
   url:'/pages/order/order.wxml'
  })
},

/**
* mine_71_71处理函数
*/
mine_71_71_click:function(e){

},

/**
* mine_73_73处理函数
*/
mine_73_73_click:function(e){

},

/**
* mine_76_76处理函数
*/
mine_76_76_click:function(e){

},

/**
* mine_79_79处理函数
*/
mine_79_79_click:function(e){

},

/**
* mine_82_82处理函数
*/
mine_82_82_click:function(e){

},

/**
* mine_151_151处理函数
*/
mine_151_151_click:function(e){

},

/**
* mine_154_154处理函数
*/
mine_154_154_click:function(e){

},

/**
* mine_157_157处理函数
*/
mine_157_157_click:function(e){

},

/**
* mine_159_159处理函数
*/
mine_159_159_click:function(e){

   wx.navigateTo({
   url:'/pages/redpacket/redpacket'
  })
},

/**
* mine_160_160处理函数
*/
mine_160_160_click:function(e){

},

/**
* mine_162_162处理函数
*/
mine_162_162_click:function(e){

   wx.navigateTo({
   url:'/pages/merchantmove/merchantmove'
  })
},

/**
* mine_163_163处理函数
*/
mine_163_163_click:function(e){

},

/**
* mine_165_165处理函数
*/
mine_165_165_click:function(e){

   wx.navigateTo({
   url:'/pages/team/team'
  })
},

/**
* mine_166_166处理函数
*/
mine_166_166_click:function(e){

},

/**
* mine_169_169处理函数
*/
mine_169_169_click:function(e){

},

/**
* mine_172_172处理函数
*/
mine_172_172_click:function(e){

},

/**
* mine_174_174处理函数
*/
mine_174_174_click:function(e){

   wx.navigateTo({
   url:'/pages/agency/agency'
  })
},

/**
* mine_175_175处理函数
*/
mine_175_175_click:function(e){

},

/**
* mine_177_177处理函数
*/
mine_177_177_click:function(e){

   wx.navigateTo({
   url:'/pages/circularize/circularize'
  })
},

/**
* mine_178_178处理函数
*/
mine_178_178_click:function(e){

},

/**
* mine_181_181处理函数
*/
mine_181_181_click:function(e){

},

/**
* mine_183_183处理函数
*/
mine_183_183_click:function(e){

   wx.navigateTo({
   url:'/pages/install/install'
  })
},

/**
* mine_184_184处理函数
*/
mine_184_184_click:function(e){

},

/**
* mine_186_186处理函数
*/
mine_186_186_click:function(e){

   wx.navigateTo({
   url:'/pages/feedback/feedback'
  })
},

/**
* mine_187_187处理函数
*/
mine_187_187_click:function(e){

},

/**
* fukma_191处理函数
*/
fukma_191_click:function(e){

   wx.navigateTo({
   url:'/pages/gathering/gathering'
  })
},

/**
* mine_194_194处理函数
*/
mine_194_194_click:function(e){

   wx.navigateTo({
   url:'/pages/register/register'
  })
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
		info_name: tmp.info_name,
jf: tmp.jf,
hb: tmp.hb,
dsfhb: tmp.dsfhb,
mine_190: tmp.mine_190,

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

