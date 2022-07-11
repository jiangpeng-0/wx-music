// pages/home-video/index.js
import {getBanners, getTopList, getSongMenu} from "../../service/api_music";
// let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    isShow:false,
    hotList:[1,1,1,1,1,1,1,1,1,1,1,1],
    songMenuList:[1,2,3,4,5]
    // name:app.globalData.name
  },
  toSearch(){
    // app.globalData.name=2
    // this.setData({name:app.globalData.name})
    wx.navigateTo({
      url:"/pages/detail-search/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList();
    // this.getHotList();
    this.getSongMenuList()
  },
  getBannerList(){
    getBanners().then(res=>{
      this.setData({banners:res.banners})
    })
  },
  getHotList(){
    getTopList(1).then(res=>{
      console.log(res,"热门推荐")
      // this.setData({hotList:res.banners})
    })
  },
  getSongMenuList(){
    getSongMenu().then(res=>{
      // this.setData({songMenuList:res.playlists})
    })
  },

  //图片加载完成
  imageLoaded(){
    //图片加载完成显示
    this.setData({isShow:true})
    //开发文档api WXML处可以复制 可以封装一个方法多个地方复用 
    //封装方法结果怎么拿到？ 就使用promise，在方法里return一个promise 在promise里拿到结果并resolve出去
    //这里可以使用节流防抖 因为每次加载图片都会执行
    const query = wx.createSelectorQuery()
    //元素的宽高位置等信息
    query.select('.image-item').boundingClientRect()
    //元素的滚动位置信息
    query.selectViewport().scrollOffset()
    query.exec((res)=>{
      // res[0].top       // #the-id节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
      // console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})