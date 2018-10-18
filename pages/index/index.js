//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '云随机',
    userInfo: {},
    hasUserInfo: false,
    menuInfoList: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'), html: '<div class="div_class" style="line-height: 30px; color: blue; font-size:12px;">1、第一次先“初始化菜本”，点完成后再回到首页面</div><div class="div_class" style="line-height: 30px; color: blue;font-size:12px;">2、按“开始点菜” </div> <div class="div_class" style="line-height: 30px; color: blue;font-size:12px;">ps: 如果有问题，先在“初始化菜本”->“清除菜单”</div>'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //设置菜单
  setConfig: function (e) {
    wx.navigateTo({
      url: '../setup/setup'
    })
  },
  //生成随机
  doRandom: function (e) {
    //开始生成随机数
    
    var mi = {}
    mi = wx.getStorageSync('menuInfo')
    var miKeyList = []
    for(var index in mi) {
      console.log("key:",index+',value:'+mi[index])
      miKeyList.push(index)
    }
    var randomList = {}
    var max = Object.keys(miKeyList).length
    var min = 0
    var rn
    for(var i=0;i<4;i++){
      rn = Math.floor(Math.random() * (max - min + 1) + min)
      console.log('此次随机数是：',rn)
      randomList[i] = mi[miKeyList[rn]]
    }
    //存储结果
    wx.setStorage({
      key: 'randomResult',
      data: randomList,
    })

    wx.navigateTo({
      url: '../random/randomresult'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    if(app.globalData.menuInfo){
      this.setData({
        menuInfo: app.globalData.menuInfo
      })
      console.log('set menuInfo success')
      console.log('menu:',this.menuInfo)
    }
  },
  getMenuInfo: function (e) {
    console.log(e)
    // app.globalData.menuInfo = e.detail.menuInfo
    // this.setData({
    //   menuInfo: e.detail.menuInfo,
    //   //hasMenuInfo: true
    // })
    var reslist={}
    var thats = this
    reslist = wx.getStorageSync('menuInfo')
    console.log('获取菜单reslist：', reslist)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
