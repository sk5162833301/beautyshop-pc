<template>
  <div class="role-management">
    <h2>角色管理</h2>
    <div class="role-management-content">
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
              <a-button type="primary" class="input-size" @click="search"
                >搜索
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
        <div class="btn-box" @click="addRole">
          <!-- <a-button type="primary">搜索 </a-button> -->
          <div class="add-user-btn">
            <span class="icon">+</span><span>新增角色</span>
          </div>
        </div>
      </div>
      <!-- 有数据表单 -->
      <div class="role-management-table" v-if="data.length > 0">
        <a-table
          :columns="columns"
          :data-source="data"
          :scroll="{ y: 550 }"
          :pagination="{ pageSize: 10 }"
        >
          <template slot="action" slot-scope="text, record">
            <div class="table-btn">
              <div @click="editRole(text, record)" class="bor-right ml-20">
                编辑
              </div>
              <div @click="getRole(text, record)" class="bor-right">授权</div>
              <a-popconfirm
                title="确定删除该角色?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="confirmdel(text, record)"
                @cancel="cancel"
              >
                <div>删除</div>
              </a-popconfirm>
            </div>
          </template>
        </a-table>
      </div>
      <!-- 无数据 -->
      <div class="no-data" v-else>
        <img src="@/assets/nodata.png" alt="" srcset="" />
        <div class="warn-info">当前数据为空，快去创建角色吧～</div>
      </div>
    </div>
    <add-role
      :addRoleVisiable="addRoleVisiable"
      @succeed="addsuccess"
    ></add-role>
    <get-role
      :getRoleVisiable="getRoleVisiable"
      @succeed="addsuccess"
    ></get-role>
    <a-modal
      :visible="addRoleVisiableOk"
      :closable="false"
      :footer="null"
      width="33.3%"
      @cancel="handleCancel"
    >
      <div class="modal-box">
        <img src="@/assets/nodata.png" alt="" srcset="" />
        <div class="saveOk" v-if="type">角色已保存成功</div>
        <div class="saveOk" v-else>角色授权成功</div>
        <div class="saveBtn" @click="modalOk">好的</div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import addRole from "./components/addRole.vue";
import getRole from "./components/getRole.vue";
export default {
  components: { addRole, getRole },
  data() {
    return {
      form: {
        userName: "",
      },
      columns: [
        {
          title: "角色名称",
          dataIndex: "roleName",
          key: "roleName",
        },
        {
          title: "角色描述",
          dataIndex: "roleDescription",
          key: "roleDescription",
        },
        {
          title: "创建日期",
          dataIndex: "createTime",
          key: "createTime",
        },
        {
          title: "修改日期",
          key: "updataTime",
          dataIndex: "updataTime",
        },
        {
          title: "操作",
          key: "action",
          scopedSlots: { customRender: "action" },
        },
      ],
      data: [
        {
          roleName:"1",
          roleDescription:"1",
          createTime:"1",
          updataTime:"1",
        },
      ],
      datas: [
        {
          key: 0,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 1,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 2,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 3,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 4,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 5,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 6,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 7,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 8,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
        {
          key: 9,
          roleName: "zzl",
          roleDescription: "zzl",
          createTime: "1997-08-01",
          updataTime: "1997-08-02",
        },
      ],
      addRoleVisiable: false,
      type: false,
      addRoleVisiableOk: false,
      getRoleVisiable: false,
    };
  },
  methods: {
    handleCancel() {
      this.addRoleVisiableOk = false;
    },
    modalOk() {
      this.addRoleVisiableOk = false;
    },
    search() {
      this.data = this.datas;
    },
    //   新增角色
    addRole() {
      this.addRoleVisiable = true;
      this.type = true;
    },
    addsuccess() {
      this.addRoleVisiable = false;
      this.getRoleVisiable = false;
      this.addRoleVisiableOk = true;
      this.getRoleok = true;
      this.init();
    },
    init() {
      console.log(1);
    },
    editRole(text, record) {
      this.addRoleVisiable = true;
      this.type = false;
    },
    confirmdel(text, record) {
      console.log(text, record);
        this.$message.success('Click on Yes');
    },
    cancel(){
         this.$message.error('Click on No');
    },
    getRole(text, record) {
      this.getRoleVisiable = true;
      console.log(text, record);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>
<style lang="scss" scoped>
.role-management {
  h2 {
    font-weight: bold;
  }
  .role-management-content {
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
        cursor:pointer;
        .add-user-btn {
          //   font-size: 19px;
          color: #ff3776;
        }
      }
    }
    .role-management-table {
      margin-top: 32px;
      /deep/.ant-table-placeholder {
        height: 605px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      // /deep/.ant-table-body{
      //     min-height: 605px; ;
      // }
      .table-btn {
        display: flex;
        color: #ff3776;
        cursor:pointer;
        // font-size: 19px;
        div {
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .no-data {
      height: 605px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 216px;
        height: 192px;
      }
      .warn-info {
        color: #71757a;
      }
    }
  }
}
.bor-right {
  border-right: 1px solid #ff3776;
}
.ml-20 {
  margin-left: -20px;
}
.modal-box {
  width: 100%;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .saveOk {
    font-size: 24px;
    font-weight: bold;
    color: #192029;
    margin-top: 32px;
  }
  img {
    width: 95px;
    height: 95px;
  }
  .saveBtn {
    margin-top: 54px;
    width: 101px;
    height: 43px;
    background: #ff3776;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    color: #ffffff;
  }
}
</style>
