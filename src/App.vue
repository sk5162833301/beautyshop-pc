<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  
};
</script>

<style lang="scss">
#app,
html,
body {
  width: 100%;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
* {
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}

/* 导航菜单标题颜色 */
.ant-menu-submenu-title:hover {
  color: #ff3776 !important;
}
// 菜单组件下箭头颜色
// .ant-menu-submenu-title {
//   .ant-menu-submenu-arrow::before,.ant-menu-submenu-arrow::after{
//     background: #FF3776!important;
//   }
// }
// 菜单组件下箭头划入颜色
.ant-menu-submenu-title:hover {
  .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-arrow::after {
    background: #ff3776 !important;
  }
}

.ant-menu-submenu-selected {
  color: #ff3776 !important;
}

.ant-menu-item-selected {
  color: #ff3776 !important;
}

.ant-menu-item-active {
  color: #ff3776 !important;
}

.ant-menu-item-selected {
  background: rgba(255, 55, 118, 0.1) !important;
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
      border-right: 0px!important;
}


</style>
