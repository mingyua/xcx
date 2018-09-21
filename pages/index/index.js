// pages/shop/index.js
const moment = require('../../utils/moment.min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    motime: moment().startOf('day').fromNow()
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "avatar": "../images/1.jpg",
          "userdate": moment('2018-09-20 18:00:00','YYYY-MM-DD hh:mm:ss').fromNow(),
          "username": "奇瑞EQ1",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 2,
          "avatar": "../images/2.jpg",
          "userdate": moment('2018-09-21 12:02:00', 'YYYY-MM-DD hh:mm:ss').fromNow(),
          "username": "奇瑞EQ1",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 3,
          "avatar": "../images/3.jpg",
          "userdate": "2017-12-22",
          "username": "奇瑞风景",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 4,
          "avatar": "../images/4.jpg",
          "userdate": "2017-12-22",
          "username": "独一无二",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 5,
          "avatar": "../images/5.jpg",
          "userdate": "2017-12-22",
          "username": "成熟卡通",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 6,
          "avatar": "../images/6.jpg",
          "userdate": "2017-12-22",
          "username": "手绘",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 7,
          "avatar": "../images/7.jpg",
          "userdate": "2017-12-22",
          "username": "部位恶搞",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 8,
          "avatar": "../images/8.jpg",
          "userdate": "2017-12-22",
          "username": "萌娃",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 9,
          "avatar": "../images/9.jpg",
          "userdate": "2017-12-22",
          "username": "性感",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 10,
          "avatar": "../images/test.jpg",
          "userdate": "2017-12-22",
          "username": "病女",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 11,
          "avatar": "../images/3.jpg",
          "userdate": "2017-12-22",
          "username": "古风",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 12,
          "avatar": "../images/5.jpg",
          "userdate": "2017-12-22",
          "username": "蜡笔小新",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 13,
          "avatar": "../images/8.jpg",
          "userdate": "2017-12-22",
          "username": "樱桃小丸子",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "20"
        }, {
          "id": 14,
          "avatar": "../images/2.jpg",
          "userdate": "2017-12-22",
          "username": "奇瑞",
          "time": "1小时",
          "title": "我是标题",
          "content": "我是内容啊,你不会不认识了吧!",
          "tag": "标签",
          "zan": "2"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      commentdata: data.datas
    })
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
    console.log(event);
    wx.showToast({
      title: `点击标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },

  onreplay: function (e) {
   var that = this;
   var firstId= e.currentTarget.id;
    console.log(e);
    wx.showToast({
      title: e.currentTarget.id,
      icon: 'none'
    });
  },
 //切换隐藏和显示 
  toggleBtn: function (event) {
    console.log(event);
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
    wx.pageScrollTo({ scrollTop: event.target.offsetTop - 132})
  },

})