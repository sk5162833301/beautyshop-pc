import Vue from 'vue';
import { Button, message, Layout, Menu, Icon, Breadcrumb, Row, Col, Select, Input, Upload, Modal } from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Menu.name, Menu);
Vue.component(Icon.name, Icon);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
Vue.component(Upload.name, Upload);
Vue.component(Modal.name, Modal);


Vue.component(Button.Group.name, Button.Group);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Row);
Vue.use(Col);
Vue.use(Select);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Modal);
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
