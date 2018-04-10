var order = ["d", "e", "f"];
var index = 0;
var progressNum = 0;
//用于返回豆瓣前250名的电影
var api = 'http://t.yushu.im/v2/movie/top250';

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
    autoplay: true,
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progress: 0,
    disabledBol: true,
    country: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    citys: ['北京', '上海', '广州', '深圳'],
    index: 0,
    time: '09:01',
    date: '2000-01-01'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timer = setInterval(function () {
      progressNum ++;
      if (progressNum >= 100){
        clearInterval(timer);
      }
      that.setData({
        progress: progressNum
      });
    }, 30);
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
  },
  ableChange: function () {
    this.setData({
      disabledBol: !this.data.disabledBol
    })
  },
  subFn: function (event) {
    console.log('提交表单', event.detail.value)
  },
  resetFn: function (event) {
    console.log('点击重置了')
  },
  checkChange: function (event) {
    console.log(event.detail.value)
  },
  inputFn: function (event) {
    console.log(event.detail.value)
  },
  focusFn: function (event) {
    console.log(event)
  },
  blurFn: function (event) {
    console.log(event)
  },
  bindPickerChangeCity: function (event) {
    this.setData({ 
      index: event.detail.value
    })
  },
  bindPickerChangeTime: function (event) {
    this.setData({
      time: event.detail.value
    })
  },
  bindPickerChangeDate: function (event) {
    this.setData({
      date: event.detail.value
    })
  },
  bindRadioChange: function (event) {
    console.log(event.detail.value)
  },
  bindSliderChange: function (event) {
    console.log(event.detail.value)
  },
  bindSwitchChange: function (event) {
    console.log(event.detail.value)
  },
  bindLineChange: function (event) {
    console.log(event.detail)
  },
  showAction: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor: 'red',
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  },
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '我是一个模态弹窗',
      cancelText: '点我取消',
      confirmText: '点我确定',
      showCancel: false,
      success: function (res) {
        console.log(res);
      }
    })
  },
  showToast: function () {
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 10000,
      success: function () {
        console.log('显示消息框成功！');
      }
    });
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideToast();
      }
    })
  },
  navigateTo: function (event) {
    wx.navigateTo({
      url: '../test/test?id=54321&user=xushubo',
    })
  }
})