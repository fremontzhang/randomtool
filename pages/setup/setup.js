//setup.js
//设置随机
const app = getApp()

Page({
  data: {
    items: [
      { name: "0", value: '鱼香肉丝' },
      { name: '1', value: '青笋肉丝' },
      { name: '2', value: '小米椒爱上小公鸡' },
      { name: '3', value: '蒜苔肉丝' },
      { name: '4', value: '虎皮尖椒' },
      { name: '5', value: '一品豆花' },
      { name: '6', value: '干锅菜花' },
      { name: '7', value: '茶香干腊肉' }
    ]
  },
  //事件处理
  storeMenu: function (e) {
    wx.setStorage({
      key: "menuInfo",
      data: app.globalData.menuInfo,
    })
    console.log('菜单已保存，共', Object.keys(app.globalData.menuInfo).length+'个菜')
    wx.navigateTo({
      url: '../index/index',
    })
  },
  //清除本地菜单缓存
  clearMenu: function (e) {
    wx.clearStorage()
    console.log('清除本地缓存')
  },
  //初始化本地菜单
  initMenu: function (e) {
    for(var index in this.data.items) {
      wx.setStorage({
        key: this.data.items[index].name,
        data: this.data.items[index].value,
      })
    }
    
    console.log('init本地缓存')
  },
  //选择菜单
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)   
    var ai = {}
    var that = this
    var mi = {}
    e.detail.value.forEach(current => {
      for (var itemValue of this.data.items) {
        if (current === itemValue.value) {
          
          var pre = itemValue.name
          ai[pre] = itemValue.value
          
          console.log('ai name:', pre + ',value:' + ai[pre])
          break;
        }
      }
    })
    //console.log('size:', Object.keys(ai).length)
    for(var kk in ai) {
      console.log('key:',kk+', value:'+ai[kk])
    }
    app.globalData.menuInfo=ai
    

    for (var le in app.globalData.menuInfo) {
      console.log('menu key:', le + ', menu value:' + app.globalData.menuInfo[le])
    }

    
  }
})