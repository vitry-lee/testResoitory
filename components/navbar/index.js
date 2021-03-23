// components/aa/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navBar: {
      type: Object,
      observer: function(val_new, val_old){
        this.setData({
          listData: val_new
        });
      }
    },
    curTemp:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 当前点击
    activeClick(e){
      let curNum = e.currentTarget.dataset.cur;
      this.setData({
        active: curNum
      });
      this.navSwitch(curNum);
    },
    // 导航切换-传参
    navSwitch(num){
      this.triggerEvent('myevent', num);
    }
  }
})
