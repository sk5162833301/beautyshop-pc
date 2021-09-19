<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">Beauty Shop</div>
      <a-menu mode="inline" :open-keys="openKeys" @openChange="onOpenChange">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>店铺管理</span></span>
          <a-menu-item key="1" @click="changeMenu('shopOverview')">
            店铺总览
          </a-menu-item>
          <a-menu-item key="2" @click="changeMenu('setUpShop')">
            店铺设置
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>权限管理</span></span>
          <a-menu-item key="3" @click="changeMenu('roleManagement')">
            角色管理
          </a-menu-item>
          <a-menu-item key="4" @click="changeMenu('accountManagement')">
            账户管理
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <div class="layoutHeader">
          <div class="layoutHeader_con">
            通知，头像，用户名  
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"]
    };
  },
  methods: {
    //路由内容切换
    changeMenu(route){
        console.log(route)
        //获取路由对象并切换
        this.$router.push(route)
    },


    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
}
</script>
<style lang="scss">

#components-layout-demo-responsive {
  height: 100%;
  background: skyblue;
}
.ant-layout-sider{
  background: #FDFDFD!important;
}
.ant-layout-content{
  margin: 0!important;
  height: 100%;
}
#components-layout-demo-responsive .logo {
  text-align: center;
  line-height: 32px;
  height: 64px;
  font-size: 20px;
  font-family: HiraMinProN-W6;
  font-weight: bold;
  color: #192029;
  margin: 16px;
}
.ant-layout-sider-children {
  background: #eff1f4;
  border-radius: 0 50px 40px 0;
}
.ant-menu-root.ant-menu-inline {
  background: #eff1f4;
}
.ant-menu-sub.ant-menu-inline > .ant-menu-item {
  background: #eff1f4;
}
ul {
  background: #eff1f4 !important;
}

.layoutHeader{
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: end;
  .layoutHeader_con{
    margin-right: 2%;

  }
}
</style>
