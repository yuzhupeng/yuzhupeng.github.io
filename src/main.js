//程序入口文件， 加载各种公共组件
import App from './App'
import router from './router'
import http from './api/http'
import permission from './api/permission'
import store from './store/index'
import base from './utilities/common'
import i18n from './i18n/'

Vue.config.productionTip = false

var vue = new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App/>'
})

Vue.prototype.http = http;
Vue.prototype.http.init(vue);
Vue.prototype.permission = permission;
Vue.prototype.permission.init(vue);
Vue.prototype.base = base;
Vue.prototype.$tabs = {};
Vue.prototype.$ELEMENT = { zIndex: 3000 };

router.beforeEach((to, from, next) => {
    vue.$Loading.start({ color: 'white', height: 2 });
    next();
})

router.afterEach(() => {
    vue.$Loading.finish();
})