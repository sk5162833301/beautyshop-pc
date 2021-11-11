<template>
  <div class="account-management">
    <!-- 账户管理  -->
    <div class="title-box">
      <h2>账户管理</h2>
      <div>
        <span>账号数量</span>
        <span class="color-p">1,000</span>
        <span>个</span>
      </div>
    </div>
    <div class="account-management-content">
      <div class="serch-btn-box">
        <div class="serch-box">
          <a-form-model :model="form" layout="inline">
            <a-form-model-item>
              <a-input
                v-model="form.roleName"
                placeholder="角色名称"
                class="input-size"
              />
            </a-form-model-item>
            <a-form-model-item>
              <a-date-picker
                @change="onChange"
                placeholder="创建时间"
                class="input-size"
              />
            </a-form-model-item>
             <a-form-model-item>
              <a-date-picker
                @change="onChange"
                placeholder="创建时间"
                class="input-size"
              />
            </a-form-model-item>
            <a-form-model-item>
              <a-button type="primary" class="input-size" @click="search"
                >搜索
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
        <div class="btn-box">
          <!-- <a-button type="primary">搜索 </a-button> -->
          <div class="add-user-btn" @click="addRole">
            <span class="icon">+</span><span>新增角色</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{}
        }
    },
    methods:{
      onChange(date, dateString) {
      console.log(date, dateString);
    },
    }
};
</script>

<style lang="scss" scoped>
.account-management {
  .title-box {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 21px;
      color: #494d52;
    }
    .color-p {
      font-size: 32px;
      color: #ff3776;
    }
  }
   .serch-btn-box {
      display: flex;
      justify-content: space-between;
      .serch-box {
        .input-size {
          height: 43px;
        }
        /deep/ .ant-calendar-picker-input.ant-input {
          height: 43px;
        }
      }
      .btn-box {
        width: 168px;
        height: 43px;
        border: 1px solid #ff3776;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        .add-user-btn {
          //   font-size: 19px;
          color: #ff3776;
        }
      }
    }
}
</style>