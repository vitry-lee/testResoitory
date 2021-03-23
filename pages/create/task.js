// pages/create/task.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        curStatus: 0,
        content: '121212',
        listStatus: [
            {
                value: 0,
                title: '重要紧急'
            },
            {
                value: 1,
                title: '重要不紧急'
            },
            {
                value: 2,
                title: '不重要但紧急'
            },
            {
                value: 3,
                title: '不重要不紧急'
            }
        ],
        date: '2021-01-01'
    },
    // 数据双向绑定操作
    bindInput(e){
        const val = e.detail.value;
        this.setData({
            content: val
        });
    },
    // 选择当前任务状态
    activeStatus(e){
        const status = e.currentTarget.dataset.activestatus;
        this.setData({
            curStatus: status
        });
    },
    // 时间选择
    bindDateChange(e) {
        const val = e.detail.value;
        this.setData({
            date: val
        });
    },
    // 任务创建
    createBtn(){
        if(String(this.data.content).length < 1){
            wx.showToast({
                title: '请添加任务名称',
                icon: 'none'
              });
        }else{
            wx.showToast({
                title: '任务创建成功',
                duration: 2000,
                success: res=>{
                  wx.redirectTo({
                      url: '/pages/index/index',
                    });
                }
              });
        };
    }
})