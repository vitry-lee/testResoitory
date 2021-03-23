// components/topBar/index.js
const App = getApp(); // 获取根实例
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        attached: function(){
            this.setData({
                navH: App.globalData.navH,
                navTop: App.globalData.navTop,
                capsuleH: App.globalData.capsuleH,
                capsuleW: App.globalData.capsuleW + 'px'
            });
        }
    }
})
