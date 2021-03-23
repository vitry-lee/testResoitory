// pages/setting/index.js
import NarbarData from '../index/narbar.js';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        curTemp: 2,
        navBar: NarbarData,
        listData: [
            {
                iconLeft: 'iconguanggao',
                value: '免广告',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconbiaoqian-',
                value: '首页默认显示模式',
                iconRight: 'iconarrow-right'
            },
            {

                iconLeft: 'iconjinggao',
                value: '自动弹出今日截至',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'icongenghuan',
                value: '更换各个页面皮肤',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconbanbengengxin',
                value: '版本检测',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'icontubiaolunkuo-',
                value: '用户反馈',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconfenxiang',
                value: '分享朋友圈',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconsaoma',
                value: '扫描下载',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconiconset0228',
                value: '换手机如何迁移数据',
                iconRight: 'iconarrow-right'
            },
            {
                iconLeft: 'iconyinsi',
                value: '隐私政策',
                iconRight: 'iconarrow-right'
            }
        ]
    },
    // 子组件narbar回传数据
    onMyEvent(data){
        switch(Number(data.detail)){
        case 0:
            wx.redirectTo({
                url: '/pages/index/index',
            });
            break;
        case 1:
            wx.redirectTo({
                url: '/pages/statiscal/index',
            })
            break;
        }
    },
    // 当前点击
    changeClick(e){
        console.log(e);
    }
})