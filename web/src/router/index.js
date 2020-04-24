import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/face/home/home'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: { title: '首页' }
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/allUser',
                    component: resolve => require(['../components/page/admin/allUser.vue'], resolve),
                    meta: { title: '所有用户' }
                },
                {
                    path: '/addUsers',
                    component: resolve => require(['../components/page/admin/addUsers.vue'], resolve),
                    meta: { title: '添加用户' }
                },
                {
                    path: '/photos',
                    component: resolve => require(['../components/page/admin/photos.vue'], resolve),
                    meta: { title: '班级相册' }
                },
                {
                    path: '/messages',
                    component: resolve => require(['../components/page/admin/messages.vue'], resolve),
                    meta: { title: '消息管理' }
                },
                {
                    path: '/userClass',
                    component: resolve => require(['../components/page/user/userClass.vue'], resolve),
                    meta: { title: '班级' }
                },
                {
                    path: '/leavingMsg',
                    component: resolve => require(['../components/page/user/leavingMsg.vue'], resolve),
                    meta: { title: '班级留言' }
                },
                {
                    path: '/classCommunication',
                    component: resolve => require(['../components/page/user/classCommunication.vue'], resolve),
                    meta: { title: '班级通讯' }
                },
                {
                    path: '/classPicture',
                    component: resolve => require(['../components/page/user/classPicture.vue'], resolve),
                    meta: { title: '班级相册' }
                },
                {
                    // 富文本编辑器组件
                    path: '/userInfo',
                    component: resolve => require(['../components/page/user/userInfo.vue'], resolve),
                    meta: { title: '个人信息' }
                },
                {
                    // 富文本编辑器组件
                    path: '/changePwd',
                    component: resolve => require(['../components/page/user/changePwd.vue'], resolve),
                    meta: { title: '修改密码' }
                },
                {
                    // 富文本编辑器组件
                    path: '/ownPeace',
                    component: resolve => require(['../components/page/user/ownPeace.vue'], resolve),
                    meta: { title: '个人空间' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/admin',
                    component: resolve => require(['../components/page/admin.vue'], resolve),
                    meta: { title: '用户信息' }
                },
                {
                    path: '/usermanager',
                    component: resolve => require(['../components/page/sysmanager/usermanager.vue'], resolve),
                    meta: { title: '用户管理' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
