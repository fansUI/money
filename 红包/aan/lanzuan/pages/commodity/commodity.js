var app = getApp();var _page=0;//当前分页页码

Page({  
  /**
   * 页面的初始数据
   */
  data: {  
    commodity_img:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_commodity_img_3.jpg',//服务器文本
    commodity_name:'我饿还打就是阿萨德阿斯顿大幅度sdf第三方sdfsdf地方是sdfsdfs撒阿萨德奥术大师大所多',//服务器文本
    commodity_price:'0.0',//服务器文本
    commodity_yj:'0.0',//服务器文本
    commodity_hb:'000000',//服务器文本
    shouchu:'213件',//服务器文本
    carriage:'0.00元',//服务器文本
    ProductDetils:'我是商品我骄傲了吗？我的上单 阿萨上单阿萨阿萨德阿萨德阿萨德奥术大师大所多啊阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨阿萨德阿萨德阿萨德阿萨德阿萨德阿萨骄傲了吗？我骄傲了上单上单阿萨阿萨阿萨德阿萨啊阿萨德啊阿萨德ad阿萨德阿萨德啊实打实阿萨德阿萨',//服务器文本
    description:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_description_36.jpg',//服务器文本
    list_red: [
      {
        id:1,
        sp_img:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_sp_img_53.jpg',
        commodity_55:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_55_55.png',
        sp_price:'20000',
        sp_jl:'000',
        scj:'市场价',
        scj_price:'00000',
        sp_name:'我是名称',

        visible1: true,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: false,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:2,
        sp_img:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_sp_img_53.jpg',
        commodity_55:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_55_55.png',
        sp_price:'20000',
        sp_jl:'000',
        scj:'市场价',
        scj_price:'00000',
        sp_name:'我是名称',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:3,
        sp_img:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_sp_img_53.jpg',
        commodity_55:'http://wx.ymznkf.com/project/8576/tabbarDemo/commodity/images/commodity_55_55.png',
        sp_price:'20000',
        sp_jl:'000',
        scj:'市场价',
        scj_price:'00000',
        sp_name:'我是名称',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
    ],
    sp_price:'20000',//服务器文本
    sp_jl:'000',//服务器文本
    scj_price:'00000',//服务器文本
    sp_name:'我是名称',//服务器文本
 
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
* commodity_img_3处理函数
*/
commodity_img_3_click:function(e){

},

/**
* commodity_14_14处理函数
*/
commodity_14_14_click:function(e){

},

/**
* commodity_18_18处理函数
*/
commodity_18_18_click:function(e){

},

/**
* commodity_29_29处理函数
*/
commodity_29_29_click:function(e){

},

/**
* description_36处理函数
*/
description_36_click:function(e){

},

/**
* sp_img_53处理函数
*/
sp_img_53_click:function(e){

},

/**
* commodity_55_55处理函数
*/
commodity_55_55_click:function(e){

},

/**
* commodity_65_65处理函数
*/
commodity_65_65_click:function(e){

},

/**
* commodity_72_72处理函数
*/
commodity_72_72_click:function(e){

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
		commodity_img: tmp.commodity_img,
commodity_name: tmp.commodity_name,
commodity_price: tmp.commodity_price,
commodity_yj: tmp.commodity_yj,
commodity_hb: tmp.commodity_hb,
shouchu: tmp.shouchu,
carriage: tmp.carriage,
ProductDetils: tmp.ProductDetils,
description: tmp.description,
sp_price: tmp.sp_price,
sp_jl: tmp.sp_jl,
scj_price: tmp.scj_price,
sp_name: tmp.sp_name,

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

