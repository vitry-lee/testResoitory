// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    curTemp: 0,
    navBar: [
      {
        icon: 'iconmenu',
        text: '四象限',
        cur: 0,
        isActive: false
      },
      {
        icon: 'icontongji',
        text: '完成与统计',
        cur: 1,
        isActive: false
      },
      {
        icon: 'iconlujing',
        text: '设置',
        cur: 2,
        isActive: true
      }
    ]
  },
  // 子组件narbar回传数据
  onMyEvent(data){
    this.setData({
      curTemp: data.detail
    });
    if(data.detail === 1){
      wx.showToast({
        title: '功能待开发',
        icon: 'none'
      });
    }
  },
  // 任务创建
  createAssignment(){
    wx.navigateTo({
      url: '/pages/create/task'
    });
  }
})
