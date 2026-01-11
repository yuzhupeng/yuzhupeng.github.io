import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () =>
                import ('@/views/PersonProfile/personregion.vue'),
            meta: {
                anonymous: true
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.length == 0) return next({ path: '/404' });
//     //2020.06.03增加路由切换时加载提示
//     store.dispatch("onLoading", true);
//     if ((to.hasOwnProperty('meta') && to.meta.anonymous) || store.getters.isLogin()) {
//         return next();
//     }
//     //query产生一个随机数在 login->home->login执行不了
//     next({ path: '/login', query: { redirect: Math.random() } });
// });

//2020.06.03增加路由切换时加载提示
router.afterEach((to, from) => {
    store.dispatch("onLoading", false);
});

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    console.log(error.message);
    console.log(targetPath);
    if (isChunkLoadFailed) {
        window.location.replace(window.location.href);
        //  router.replace(targetPath);
    }
});

export default router;
