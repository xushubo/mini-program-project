var order = ["d", "e", "f"];
var index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "d",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    inter: 2000,
    autoplay: true
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
  scrolltoupper: function (event) {
    console.log(event);
    console.log('触发了scrolltoupper事件');
  },
  scrolltolower: function (event) {
    console.log(event);
    console.log('触发了scrolltolower事件');
  },
  scroll: function (event) {
    console.log(event);
    console.log('触发了scroll事件');
  },
  tapChange: function () {
    index ++;
    if (index > order.length - 1){
      index = 0;
    }
    this.setData({
      toView: order[index]
    });
  },
  swiperChange: function (event) {
    console.log(event)
  },
  intervalChange: function (event) {
    console.log(event);
    var sliderValue = event.detail.value;
    this.setData({
      inter: sliderValue
    })
  },
  changeAutoplay: function () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  }
})