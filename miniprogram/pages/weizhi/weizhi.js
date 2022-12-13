// pages/map/map.js
Page({

   /* WZJ注释：使用腾讯位置服务的坐标拾取器，获取广州华商学院中央图书馆的坐标,并将经纬度输入在地图相关的wxml编写组件,,编写华商图书馆的定位地图样式*/
   data: {
    latitude:23.258207,longitude:113.778342,
    markers:[{
        iconPath:'/images/navi.png',id:0,
        latitude:23.258207,longitude:113.778342,height:50,width:50
    }]
},
  /*WZJ注释：编写data数据和markertap()函数*/
  markertap:function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name:'广州华商学院中央图书馆' ,
      address:'广州市 增城区 华商路'
})
},
 /* 通过wx.getLocation()获取用户位置，再通过wxwx.openLocation()显示该位置地图*/
buttonTap:function() {
  wx.getLocation({
      type:'wgs84',
      success:function (res) {
          wx.openLocation({
            latitude: res.latitude,
            longitude: res.longitude,
          })
      }
  })
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

  }
})