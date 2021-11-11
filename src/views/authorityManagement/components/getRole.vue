<template>
  <div>
    <a-modal
      title="角色授权"
      :visible="getRoleVisiable"
      width="33.3%"
      @ok="saveRole"
      @cancel="handleCancel"
    >
     <a-tree
    v-model="checkedKeys"
    checkable
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    @expand="onExpand"
    @select="onSelect"
  />
    </a-modal>
  </div>
</template>

<script>
export default {
props:{
    getRoleVisiable:{
        type:Boolean
    }
},
data(){
    return{
        treeData : [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
       
      },
      {
        title: '0-0-1',
        key: '0-0-0',
       
      },
      {
        title: '0-0-2',
        key: '0-0-0',
       
      },
    ],
  },
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
       
      },
      {
        title: '0-0-1',
        key: '0-0-0',
       
      },
      {
        title: '0-0-2',
        key: '0-0-0',
       
      },
    ],
  }, {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
       
      },
      {
        title: '0-0-1',
        key: '0-0-0',
       
      },
      {
        title: '0-0-2',
        key: '0-0-0',
       
      },
    ],
  }, {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
       
      },
      {
        title: '0-0-1',
        key: '0-0-0',
       
      },
      {
        title: '0-0-2',
        key: '0-0-0',
       
      },
    ],
  }, {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
       
      },
      {
        title: '0-0-1',
        key: '0-0-0',
       
      },
      {
        title: '0-0-2',
        key: '0-0-0',
       
      },
    ],
  },
],
  expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    }
}, watch: {
    checkedKeys(val) {
      console.log('onCheck', val);
    },
  },
methods:{
    saveRole(){
             this.$emit("succeed");
    },
    handleCancel(){},
     onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
   
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info);
      this.selectedKeys = selectedKeys;
    },
}
}
</script>

<style lang="scss" scoped>
/deep/.ant-tree-child-tree-open{
    display: flex;
}
</style>