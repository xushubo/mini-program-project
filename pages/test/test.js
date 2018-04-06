var app = getApp();
var common = require("../../common/common");

Page({
  data:{
    name: "xushubo",
    pass: null,
    id: 0,
    condition: true,
    arr: [1, 2, 3, 4, 5],
    obj1: {
      a: 3,
      b: 4
    }
  },
  show: function () {
    //var condition = this.data.condition;
    this.setData({
      condition: !this.data.condition
    })
  },
  say: function () {
    common.sayHello(this.data.name);
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
  },
  innerTap: function(event) {
    console.log(event);
    console.log("触发了inner的tap事件");
  },
  middleTap: function(event) {
    console.log(event);
    console.log("触发了middle的tap事件");
  },
  outterTap: function(event) {
    console.log(event);
    console.log("触发了outter的tap事件");
  }
})