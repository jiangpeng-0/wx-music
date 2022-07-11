// pages/detail-mv/index.js
import {getMvUrl,getMvDetail,getAllMv} from "../../service/api_mv";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrlInfo:{},
    isPlay:false,
    isPend:false,
    flagErr:false,
    error:""
  },
  getPageData(id){
    getMvUrl(id).then(res=>{
      console.log(res,res.data.url)
      this.setData({mvUrlInfo:res.data})
    }).catch(err=>{
      console.log(err)
    })
    getMvDetail(id).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    getAllMv(id).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  videoErrorCallback(e) {
    this.setData({flag:true,flagErr:true,error:"视频出错啦！"});
  },
  bindPlayVideo() {
    console.log(2121212)
  },
  playMv(){
    this.videoContext = wx.createVideoContext('myVideo');
    if (!this.data.isPlay){
      //开始播放
        this.videoContext.play()//开始播放
        this.setData({isPlay:true,isPend:true});
      }else{
      //当play==false 显示图片 暂停
      
        this.videoContext.pause()//暂停播放
        this.setData({isPlay:false,isPend:false});
      }
  },
  pendMv(){
    this.videoContext = wx.createVideoContext('myVideo');
    if (!this.data.isPlay){
      //开始播放
        this.videoContext.play()//开始播放
        this.setData({isPlay:true,isPend:true});
      }else{
      //当play==false 显示图片 暂停
      
        this.videoContext.pause()//暂停播放
        this.setData({isPlay:false});
      }
  },
  bindendedVideo(){
    this.setData({isPlay:false});
  },
  quanpin(){
    this.videoContext = wx.createVideoContext('myVideo');
    this.videoContext.requestFullScreen({direction:90});
    this.videoContext.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.videoContext=wx.createVideoContext('myVideo')
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