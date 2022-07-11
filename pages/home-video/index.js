// pages/home-music/index.js
import {getMvData} from "../../service/api_mv"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvData:[],
    swiperData:[],
    hasMore:true,
    arr:[{text:"取消"},{text:"确定"}],
    dialogFlag:true,
    value:""
  },
  async getTopMvData(offset){
    try {
      if(!this.data.hasMore && offset !==0) return;
      wx.showNavigationBarLoading();
      const res=await getMvData(offset);
      // console.log(res)
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      if(offset === 0){
        this.setData({mvData:res.data,swiperData:res.data,hasMore:res.hasMore});
      }else{
        this.setData({mvData:this.data.mvData.concat(res.data),hasMore:res.hasMore});
      }
    } catch (error) {
      wx.hideNavigationBarLoading();
      wx.showToast({
        title:"接口错误",
        icon:"error"
      })
    }
  },
  handleMvItemClick(e){
    // console.log(e.target.dataset.item.id)
    wx.navigateTo({
      url:`/pages/detail-mv/index?id=${e.target.dataset.item.id}`
    })
  },
  change(e){
    this.setData({value:e.detail.value})
  },
  handleTest(e){
    if(e.detail.item.text==="确定"){
      if(this.data.value==123456){
        this.close();
      }else{
        this.setData({value:""});
        wx.showToast({
          title: '密码错误',
          icon: 'error',
          duration: 2000
        })
      }
    }else{
      this.close();
    }
  },
  close(){
    this.setData({dialogFlag:false})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTopMvData(0);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(){

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
    this.getTopMvData(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getTopMvData(this.data.mvData.length);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})