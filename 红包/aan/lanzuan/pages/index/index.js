var app = getApp();var _page=0;//当前分页页码

Page({  
  /**
   * 页面的初始数据
   */
  data: {  
    imgUrls_slideshow: ['/image/timg.jpg','/image/timg.jpg','/image/timg.jpg'],//幻灯切换图片地址
    linkUrls_slideshow: ['#','#','#'],//幻灯切换图片链接地址
    list_cuxiao: [
      {
        id:1,
        cx_img:'',
        cx_name:'名称',
        cx_price:'0',
        cx_scj:'0',
        cx_red:'0',

        _status:0//附加参数，自定义
      },
      {
        id:2,
        cx_img:'',
        cx_name:'名称',
        cx_price:'0',
        cx_scj:'0',
        cx_red:'0',

        _status:0//附加参数，自定义
      },
    ],
    cx_img:'',//服务器文本
    list_red_coneer: [
      {
        id:1,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
      {
        id:2,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
      {
        id:3,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
      {
        id:4,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
      {
        id:5,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
      {
        id:6,
        red_img:'',
        red_price:'0',
        red_jl:'0',
        red_scj:'0',
        red_name:'我',
       

        _status:0//附加参数，自定义
      },
    ],
    red_img:'',//服务器文本
    list_recommend_coneer: [
      {
        id:1,
        recommend_img:'',
        recommend_price:'0',
        recommend_yj:'0',
        recommend_red:'0',
        recommend_namae:'我是',

        _status:0//附加参数，自定义
      },
      {
        id:2,
        recommend_img:'',
        recommend_price:'0',
        recommend_yj:'0',
        recommend_red:'0',
        recommend_namae:'我是',

        _status:0//附加参数，自定义
      },
      {
        id:3,
        recommend_img:'',
        recommend_price:'0',
        recommend_yj:'0',
        recommend_red:'0',
        recommend_namae:'我是',

        _status:0//附加参数，自定义
      },
      {
        id:4,
        recommend_img:'',
        recommend_price:'0',
        recommend_yj:'0',
        recommend_red:'0',
        recommend_namae:'我是',

        _status:0//附加参数，自定义
      },
    ],
    recommend_img:'',//服务器文本
    list_merchant_coneer: [
      {
        id:1,
        merchant_img:'',
        merchant_name:'名称',
        merchant_zk:'我的',
        merchant_site:'你的',
       
        merchant_distance:'3.3',

        _status:0//附加参数，自定义
      },
      {
        id:2,
        merchant_img:'',
        merchant_name:'名称',
        merchant_zk:'我的',
        merchant_site:'你的',
       
        merchant_distance:'3.3',

        _status:0//附加参数，自定义
      },
      {
        id:3,
        merchant_img:'',
        merchant_name:'名称',
        merchant_zk:'我的',
        merchant_site:'你的',
       
        merchant_distance:'3.3',

        _status:0//附加参数，自定义
      },
    ],
    merchant_img:'',//服务器文本
    
    //系统默认参数
    clientHeight:0,//滑动门计算高度使用
    apiUrl:'',//后端接口地址
    id:'',//传值使用,方便存在本地的locakStorage  
    del_id:'',//方便存在本地的locakStorage  
    response:'' //存取返回数据  
  }, 
  //扫一扫
  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../conter/conter?title=' + res.result

        })
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

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
slide_image_slideshow_click:function(e){
   var index = e.currentTarget.dataset.index;
   wx.navigateTo({url:this.data.linkUrls_slideshow[index]});
},

/**
* zuixin_5处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
zuixin_5_click:function(e){

},

/**
* index_8_8处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_8_8_click:function(e){

   wx.navigateTo({
   url:'/pages/newsteends/newsteends'
  })
},

/**
* index_9_9处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_9_9_click:function(e){

   wx.navigateTo({
   url:'/pages/newsteends/newsteends'
  })
},

/**
* hbsc_13处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
hbsc_13_click:function(e){

   wx.switchTab({
   url:'/pages/store/store'
  })
},

/**
* index_14_14处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_14_14_click:function(e){

},

/**
* hbjh_16处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
hbjh_16_click:function(e){

   wx.navigateTo({
   url:'/pages/bonusplan/bonusplan'
  })
},

/**
* index_17_17处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_17_17_click:function(e){

},

/**
* index_20_20处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_20_20_click:function(e){

},

/**
* index_23_23处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_23_23_click:function(e){

},

/**
* index_26_26处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_26_26_click:function(e){

},

/**
* xszn_28处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
xszn_28_click:function(e){

   wx.navigateTo({
   url:'/pages/beginners/beginners'
  })
},

/**
* index_29_29处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_29_29_click:function(e){

},

/**
* index_32_32处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_32_32_click:function(e){

},

/**
* index_35_35处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_35_35_click:function(e){

},

/**
* pic_banner_37处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
pic_banner_37_click:function(e){

},

/**
* index_42_42处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_42_42_click:function(e){

   wx.navigateTo({
     url:'/pages/goods_details/index?id='+this.data.id+''
  })
},

/**
* cx_img_43处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
cx_img_43_click:function(e){

},

/**
* red_img_65处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
red_img_65_click:function(e){

},

/**
* index_70_70处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_70_70_click:function(e){

},

/**
* index_75_75处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_75_75_click:function(e){

   wx.navigateTo({
     url:'/pages/goods_details/index?id='+this.data.id+''
  })
},

/**
* recommend_83处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
recommend_83_click:function(e){

   wx.navigateTo({
     url:'/pages/goods_details/index?id='+this.data.id+''
  })
  }, 

/**
* recommend_img_85处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
recommend_img_85_click:function(e){

},

/**
* index_101_101处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_101_101_click:function(e){

   wx.switchTab({
   url:'/pages/merchat/merchat'
  })
},

/**
* index_102_102处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_102_102_click:function(e){

},

/**
* index_104_104处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_104_104_click:function(e){

   wx.navigateTo({
   url:'/pages/information/information?id='+this.data.id+''
  })
},

/**
* merchant_img_107处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
merchant_img_107_click:function(e){

},

/**
* index_115_115处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_115_115_click:function(e){

},

/**
* index_116_116处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_116_116_click:function(e){

},

/**
* saosao_120处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
saosao_120_click:function(e){

},

/**
* index_123_123处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_123_123_click:function(e){

   wx.navigateTo({
   url:'/pages/searchbar/searchbar'
  })
},

/**
* index_125_125处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_125_125_click:function(e){

},

/**
* index_127_127处理函数
* 数据绑定  data-index="{{index}}" 
* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.data.list_cata_list[index];
*/
index_127_127_click:function(e){

   wx.navigateTo({
   url:'/pages/circularize/circularize'
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
      url: " http://47.105.58.166:8083/banner",//后端接口地址，需要改成自己的接口地址
      headers: {
        'Content-Type': 'application/json'
      },
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
		slideshow: tmp.slideshow,
totiao: tmp.totiao,
cx_img: tmp.cx_img,
cx_name: tmp.cx_name,
cx_price: tmp.cx_price,
cx_scj: tmp.cx_scj,
red_img: tmp.red_img,
red_scj: tmp.red_scj,
red_name: tmp.red_name,
red_price: tmp.red_price,
red_jl: tmp.red_jl,
recommend_img: tmp.recommend_img,
recommend_price: tmp.recommend_price,
recommend_yj: tmp.recommend_yj,
recommend_namae: tmp.recommend_namae,
merchant_img: tmp.merchant_img,
merchant_name: tmp.merchant_name,
merchant_zk: tmp.merchant_zk,
merchant_site: tmp.merchant_site,
merchant_distance: tmp.merchant_distance,
cx_red: tmp.cx_red,
recommend_red: tmp.recommend_red,

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

