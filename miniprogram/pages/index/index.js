const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据 
   1.洗洗衣机2.清洗空调清洗 3.被子等大件清洗 
   4.衣服干洗 5.球鞋干洗 6.商店版块 
   7.个性设计 8.地面清洁 9.其他帮助
   */
  data: {
    banner: ['../../images/1.jpg', '../../images/2.jpg', '../../images/3.jpg'],
    indexConfig: [{
        icon: '../../images/洗衣机.png',
        text: '清洗衣机',
        url: '../xiyiji/xiyiji'
      },
      {
        icon: '../../images/空调.png',
        text: '空调清洗',
        url: '../kongtiao/kongtiao',
      },
      {
        icon: '../../images/清洗.png',
        text: '大件清洗',
        url: '../dajian/dajian',
      },
      {
        icon: '../../images/衣服.png',
        text: '衣服干洗',
        url: '../yifu/yifu',
      },
      {
        icon: '../../images/球鞋.png',
        text: '球鞋干洗',
        url: '../qiuxie/qiuxie',
      },
      {
        icon: '../../images/商店.png',
        text: '商店版块',
        url: '../shangdian/shangdian',
      },
      {
        icon: '../../images/拖把.png',
        text: '地面清洁',
        url: '../dimian/dimian',
      },
      {
        icon: '../../images/位置.png',
        text: '实时定位',
        url: '../weizhi/weizhi',
      },
      {
        icon: '../../images/qita.png',
        text: '其它帮助',
        url: '../otherHelp/otherHelp',
      }
    ]
  },

  toDetail(e) {
    const userInfo = wx.getStorageSync('userInfo');
    const url = e.currentTarget.dataset.url;
    if (userInfo) {
      wx.navigateTo({
        url,
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请前往个人中心登录',
      })
    }
  },

  handleClickNotice() {
    wx.showModal({
      title: '公告',
      content: '关注公众号活动宿舍清洁大优惠，请务必添加客服v: 12580'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openid = wx.getStorageSync('openid');
    if (!openid) {
      wx.cloud.callFunction({
        name: 'UserOpenId',
        success: (res) => {
          const {
            openid
          } = res.result;
          wx.setStorageSync('openid', openid);
        }
      })
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