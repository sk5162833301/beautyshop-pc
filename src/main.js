import Vue from 'vue';
import { Button, message, Layout, Menu, Icon } from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Menu.name, Menu);
Vue.component(Icon.name, Icon);
Vue.component(Button.Group.name, Button.Group);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
