// app.js
App({
  onLaunch() {
    // 获取胶囊信息
    let menuBtnObj = wx.getMenuButtonBoundingClientRect();
    // 获取设置信息
    wx.getSystemInfo({
      success: (res) => {
        let statusBarH = res.statusBarHeight,
            navTop = menuBtnObj.top, // 胶囊按钮与顶部的距离
            navH = statusBarH + menuBtnObj.height + (navTop - statusBarH)*2; //  导航高度
        this.globalData.navH = navH;
        this.globalData.navTop = navTop;
        this.globalData.windowH = res.windowHeight;
        this.globalData.capsuleW = menuBtnObj.width;
        this.globalData.capsuleH = menuBtnObj.height;
      },
      fail: (res)=>{
        console.log(res);
      }
    });
    
    // 获取openId信息
    wx.login({
      success: (login_sus) => {
        // console.log(login_sus);
        const http_obj = {
          appid: 'wx286568d4861946c1',
          secret: 'a68f365014c4dfeba791d5c534a886cb',
          js_code: login_sus.code,
          grant_type: 'authorization_code'
        };
        // console.log(http_obj);
        // wx.request({
        //   method: 'GET',
        //   data: http_obj,
        //   url: 'http://api.weixin.qq.com/sns/jscode2session',
        //   success: token_sus => {
        //     console.log(token_sus)
        //   },
        //   fail: token_error => {
        //     console.log(token_error);
        //   }
        // })
      },
      fail: (login_error) => {
        console.log(login_error);
      }
    });
  },
  globalData: {
    userInfo: null
  }
})
