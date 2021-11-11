<template>
  <!-- 新增修改角色 -->
  <div>
    <a-modal
      :title="type ? '新增角色' : '修改角色'"
      :visible="addRoleVisiable"
      width="875px"
      @ok="saveRole"
      @cancel="handleCancel"
      
    >
      <a-form-model :model="form" layout="horizontal" :rules="rules" ref="form">

        <a-form-model-item prop="roleName" ref="roleName" :autoLink="false">

          <div class="form-item">
            <div class="item-label">角色名称:</div>
            <a-input
              v-model="form.roleName"
              placeholder="请输入角色名称"
              class="input-size"
              @blur="  () => {$refs.roleName.onFieldBlur()}"
            />
          </div>
        </a-form-model-item>
        <a-form-model-item prop="roleDescription" ref="roleDescription" :autoLink="false">
          <div class="form-item">
            <div class="item-label">角色描述:</div>
            <a-input
              class="input-size"
              v-model="form.roleDescription"
              type="textarea"
              placeholder="请填写角色描述信息"
              @blur="  () => {$refs.roleDescription.onFieldBlur()}"
            />
          </div>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    addRoleVisiable: {
      type: Boolean,
    },
    type: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: {
        roleName: "",
        roleDescription: "",
      },
      rules: {
        roleDescription: [
          { required: true, message: "必填项不能为空哦", trigger: "blur" },
        ],
        roleName: [
          { required: true, message: "必填项不能为空哦", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    saveRole() {
      this.$refs.form.validate(valid => {
        if (valid) {
           this.$emit("succeed");
        } else {
          console.log('error submit!!');
          return false;
        }
      });
   
      // this.$emit("update:addRoleVisiable",false)
    
    },
    handleCancel() {
      // this.$emit("update:addRoleVisiable",false)
      this.$emit("succeed");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  .item-label {
    width: 104px;
  }
  .input-size {
    width: 696px;
  }
}
/deep/.ant-form-explain{
  margin-left: 105px;
}
</style>