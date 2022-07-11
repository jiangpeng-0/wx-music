// pages/home-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[{text:"取消"},{text:"确定"}],
    dialogFlag:true,
    value:""
  },

  change(e){
    this.setData({value:e.detail.value})
  },
  handleTest(e){
    if(e.detail.item.text==="确定"){
      if(this.data.value==123456){
        this.close();
      }else{
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