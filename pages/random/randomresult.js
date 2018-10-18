// pages/random/randomresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    randomRs : {},
    randomArr : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.randomRs = wx.getStorageSync('randomResult')
    console.log('randomRs:',this.data.randomRs)
    var rrs = this.data.randomRs
    var rar = []
    for (var i in rrs){
      rar.push(rrs[i])      
    }
    this.setData({
      randomArr:rar
    })

    for(var abc in this.data.randomArr) {
      console.log('randomArr:', this.data.randomArr[abc])
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})