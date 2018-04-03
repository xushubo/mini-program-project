var app = getApp();

Page({
  data:{
    name: "xushubo",
    pass: null
  },
  onLoad:function(options){
    this.setData({
      pass: app.globalData.pass
    });
  },
  onShow: function(){
    console.log("这个是测试页的onShow方法")
  },
  toIndex: function() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  toNavi: function () {
    wx.navigateTo({
      url: '../navi/navi',
      success: function() {
        console.log("跳转到navi页面成功");
      }
    })
  }
})