// pages/task/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        taskList: [
            {
                status: 0, // 重要+紧急
                unfinished: [
                    {
                        status: false,
                        title: '测试任务11'
                    },
                    {
                        status: false,
                        title: '测试任务22'
                    }
                ],
                finished: [
                    {
                        status: true,
                        title: '已测试任务11'
                    },
                    {
                        status: true,
                        title: '已测试任务22'
                    }
                ]
            },
            {
                status: 1, // 重要+不紧急
                unfinished: [
                    {
                        status: false,
                        title: '重要+不紧急11'
                    },
                    {
                        status: false,
                        title: '重要+不紧急22'
                    }
                ],
                finished: []
            },
            {
                status: 2, // 不重要+紧急
                unfinished: [
                    {
                        status: false,
                        title: '不重要+紧急11'
                    },
                    {
                        status: true,
                        title: '不重要+紧急22'
                    }
                ],
                finished: []
            },
            {
                status: 3, // 不重要+不紧急
                unfinished: [
                    {
                        status: false,
                        title: '不重要+不紧急11'
                    },
                    {
                        status: true,
                        title: '不重要+不紧急22'
                    }
                ],
                finished: []
            },
        ]
    },

    // 更改当前任务状态-未完成
    unfinishPress(){
        wx.showModal({
          title: '提示',
          content: '更改当前任务状态-未完成',
          success: res => {
          }
        });
    },
    // 更改当前任务状态-已完成
    finishPress(){
        wx.showModal({
          title: '提示',
          content: '更改当前任务状态-已完成',
          success: res => {
          }
        });
    },
    // 更改当前任务进度-未完成
    unfinishStatus(){
        wx.showModal({
            title: '更改当前任务状态-未完成'
        });
    },
    // 更改当前任务进度-已完成
    finishStatus(){
        wx.showModal({
            title: '更改当前任务状态-已完成'
        });
    }
})