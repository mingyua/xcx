// pages/forum/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      src: '../images/test.jpg',
      title: 'scaleToFill：不保持纵横比缩',
      tags: '不保',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      src: '../images/test.jpg',
      title: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
      tags: '持纵',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      src: '../images/test.jpg',
      title: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应',
      tags: '横比缩放',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    mode: 'scaleToFill'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  zan: function (e) {
    console.log(0);
  },
  comment: function (e) {
    console.log(e);
  },
  onClick: function (event) {
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  }



})