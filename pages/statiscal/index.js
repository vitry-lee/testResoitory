// pages/statiscal/index.js
import NarbarData from '../index/narbar.js';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        curTemp: 1,
        navBar: NarbarData
    },
    // 子组件narbar回传数据
    onMyEvent(data){
        switch(Number(data.detail)){
        case 0:
            wx.redirectTo({
                url: '/pages/index/index',
            });
            break;
        case 2:
            wx.redirectTo({
                url: '/pages/setting/index',
            })
            break;
        }
    },
})