//index.js
//获取应用实例
const app = getApp()
var server = app.globalData.server;
var userid = app.globalData.userid;

Page({
  data: {
    userInfo: {},   
  },  
  onLoad: function () {
    var that = this
    
    wx.getUserInfo({
      success: function(res){
        that.setData({
          userInfo: res.userInfo
        })
      }
    }) 
    
    wx.request({
      url: server,
      method: 'GET',
      data: { 'c': 'info', 'userid': userid},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({       
          slideList: res.data.slideList
        });
      }
    })

    wx.setClipboardData({
      data: '7mdRbr48sM',
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function (options) {
    // console.log(options);
    return {
      title: '我们结婚啦！',
      desc: '我们的幸福需要您的祝福与见证，诚意邀请您参加我们的婚礼',
      imageUrl: '/images/mail.png',
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
})
