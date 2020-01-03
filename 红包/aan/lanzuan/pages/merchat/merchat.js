var app = getApp();var _page=0;//当前分页页码

Page({  
  /**
   * 页面的初始数据
   */
  data: {  
    imgUrls_swiper: ['C:/Users/晟信众途/Desktop/lanzuanwang/lanzuan/tabbarComponent/icon/mer_bg_icon.png','C:/Users/晟信众途/Desktop/lanzuanwang/lanzuan/tabbarComponent/icon/mer_bg_icon.png','C:/Users/晟信众途/Desktop/lanzuanwang/lanzuan/tabbarComponent/icon/mer_bg_icon.png'],//幻灯切换图片地址
    linkUrls_swiper: ['#','#','#'],//幻灯切换图片链接地址
    array_xuanzheqi:['商家分类','商家一','商家二','商家三','商家四','商家五'],//
    index_xuanzheqi:0,
    rzshangjia:'0',//服务器文本
    list_sj: [
      {
        id:1,
        sj_img:'/merchat/images/merchat_sj_img_23.jpg',
        sj_name:'心扉假日酒店(火车站店)',
        sj_zheko:'周二会员日五折',
        sj_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_48:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_48_48.jpg',
        merchat_49:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_49_49.jpg',
        sj_jl:'1.5',

        visible1: true,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: false,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:2,
        sj_img:'/merchat/images/merchat_sj_img_23.jpg',
        sj_name:'心扉假日酒店(火车站店)',
        sj_zheko:'周二会员日五折',
        sj_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_48:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_48_48.jpg',
        merchat_49:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_49_49.jpg',
        sj_jl:'1.5',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:3,
        sj_img:'/merchat/images/merchat_sj_img_23.jpg',
        sj_name:'心扉假日酒店(火车站店)',
        sj_zheko:'周二会员日五折',
        sj_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_48:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_48_48.jpg',
        merchat_49:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_49_49.jpg',
        sj_jl:'1.5',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
    ],
    sj_img:'/merchat/images/merchat_sj_img_23.jpg',//服务器文本
    sj_name:'心扉假日酒店(火车站店)',//服务器文本
    sj_zheko:'周二会员日五折',//服务器文本
    sj_dizi:'比京市大兴区黄村西大街20字以内',//服务器文本
    list_sb: [
      {
        id:1,
        sb_img:'/merchat/images/merchat_sb_img_53.jpg',
        sb_name:'心扉假日酒店(火车站店)',
        sb_zheko:'周二会员日五折',
        sb_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_59:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_59_59.jpg',
        merchat_60:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_60_60.jpg',
        sb_jl:'1.5',

        visible1: true,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: false,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:2,
        sb_img:'/merchat/images/merchat_sb_img_53.jpg',
        sb_name:'心扉假日酒店(火车站店)',
        sb_zheko:'周二会员日五折',
        sb_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_59:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_59_59.jpg',
        merchat_60:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_60_60.jpg',
        sb_jl:'1.5',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
      {
        id:3,
        sb_img:'/merchat/images/merchat_sb_img_53.jpg',
        sb_name:'心扉假日酒店(火车站店)',
        sb_zheko:'周二会员日五折',
        sb_dizi:'比京市大兴区黄村西大街20字以内',
        merchat_59:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_59_59.jpg',
        merchat_60:'http://wx.ymznkf.com/project/8576/tabbarDemo/merchat/images/merchat_60_60.jpg',
        sb_jl:'1.5',

        visible1: false,//用于控制多种不同的行的显示与隐藏,{{item.visible1?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible2: true,//用于控制多种不同的行的显示与隐藏,{{item.visible2?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        visible3: false,//用于控制多种不同的行的显示与隐藏,{{item.visible3?'ym_show':'ym_hide'}} 详情http://www.ymznkf.com/new_view_654.htm
        _status:0//附加参数，自定义
      },
    ],
    sb_img:'/merchat/images/merchat_sb_img_53.jpg',//服务器文本
    sb_name:'心扉假日酒店(火车站店)',//服务器文本
    sb_zheko:'周二会员日五折',//服务器文本
    sb_dizi:'比京市大兴区黄村西大街20字以内',//服务器文本
 
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
* slide_img处理函数
*/
slide_image_swiper_click:function(e){
   var index = e.currentTarget.dataset.index;
   wx.navigateTo({url:this.data.linkUrls_swiper[index]});
},

/**
* merchat_7_7处理函数
*/
merchat_7_7_click:function(e){

},

/**
* picker处理函数
*/
xuanzheqi_Change:function(e){
   console.log('picker发送选择改变，携带值为', e.detail.value);
   this.setData({
     index_xuanzheqi: e.detail.value
   })
},

/**
* merchat_9_9处理函数
*/
merchat_9_9_click:function(e){

},

/**
* merchat_11_11处理函数
*/
merchat_11_11_click:function(e){

},

/**
* sj_content_20处理函数
*/
sj_content_20_click:function(e){

   wx.navigateTo({
   url:'/pages/information/information?id='+this.data.id+''
  })
},

/**
* sj_img_23处理函数
*/
sj_img_23_click:function(e){

},

/**
* merchat_48_48处理函数
*/
merchat_48_48_click:function(e){

},

/**
* merchat_49_49处理函数
*/
merchat_49_49_click:function(e){

},

/**
* sb_content_52处理函数
*/
sb_content_52_click:function(e){

   wx.navigateTo({
   url:'/pages/information/information?id='+this.data.id+''
  })
},

/**
* sb_img_53处理函数
*/
sb_img_53_click:function(e){

},

/**
* merchat_59_59处理函数
*/
merchat_59_59_click:function(e){

},

/**
* merchat_60_60处理函数
*/
merchat_60_60_click:function(e){

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
	xuanzheqi: that.data.index_xuanzheqi,

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
		array_xuanzheqi: tmp.picker_xuanzheqi,

			response: res
		})
	}



	that.setData({
		swiper: tmp.swiper,
index_xuanzheqi: tmp.xuanzheqi,
rzshangjia: tmp.rzshangjia,
maps: tmp.maps,
sj_img: tmp.sj_img,
sj_name: tmp.sj_name,
sj_zheko: tmp.sj_zheko,
sj_dizi: tmp.sj_dizi,
sb_img: tmp.sb_img,
sb_name: tmp.sb_name,
sb_zheko: tmp.sb_zheko,
sb_dizi: tmp.sb_dizi,

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

