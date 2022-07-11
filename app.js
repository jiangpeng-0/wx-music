// app.js
App({
  onLaunch() {
      const info = wx.getSystemInfoSync();
      this.globalData.screenWidth=info.screenWidth;
      this.globalData.screenHeight=info.screenHeight;
      const routerBeforeEach = (next) => {
      const token = wx.getStorageSync('token');
      if (token) {
        next();
        return;
      }
      // if (!token && !getApp().globalData.isInLogin) {
      // getApp().globalData.isInLogin = true
      // console.log(123)
      // wx.reLaunch({
      //   url: '/pages/user/user',
      // })
      //  return
      // }
      next()
   }
   
   const OldPage = Page;
   Page = function (options) {
     const oldLoad = options.onLoad
     const oldShow = options.onShow
     options.onLoad = function () {
       routerBeforeEach(() => {
         if(oldLoad){
          oldLoad.apply(this, arguments)
          // console.log('new onLoad')
          // 小程序页面 uv 埋点
         }
       })
     }
     options.onShow = function () {
       routerBeforeEach(() => {
         if(oldShow){
          oldShow.apply(this, arguments)
          // console.log('new onShow')
          // 小程序页面 pv 埋点
         }
         
       })
     }
    //  console.log(options)
     OldPage(options)
   }



  //   const routerBeforeEach = (next) => {
  //     const token = wx.getStorageSync('token');
  //     if (token) {
  //       next();
  //       return;
  //     }
  //     if (!token && !getApp().globalData.isInLogin) {
  //     getApp().globalData.isInLogin = true
  //     console.log(123)
  //     wx.getUserProfile({
  //       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //       success: (res) => {
  //         console.log(res)
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //      return
  //     }
  //     next()
  //  }
   
  //  const OldPage = Page;
  //  Page = function (options) {
  //    const oldLoad = options.onLoad
  //    const oldShow = options.onShow
  //    options.onLoad = function () {
  //      routerBeforeEach(() => {
  //        if(oldLoad){
  //         oldLoad.apply(this, arguments)
  //         console.log('new onLoad')
  //         // 小程序页面 uv 埋点
  //        }
  //      })
  //    }
  //    options.onShow = function () {
  //      routerBeforeEach(() => {
  //        if(oldShow){
  //         oldShow.apply(this, arguments)
  //         console.log('new onShow')
  //         // 小程序页面 pv 埋点
  //        }
         
  //      })
  //    }
  //    console.log(options)
  //    OldPage(options)
  //  }
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    name:1,
    screenWidth:0,//设备宽
    screenHeight:0,//设备高
  },
  
})
