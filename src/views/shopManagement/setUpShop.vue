<template>
    <div class="setUpShop">
        <h2>店铺信息</h2>
        <div class="setUpShop_content">
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span></span>店铺名称:</div>
                        <div class="messageBox_content"><span>eauty Store</span></div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span></span>店铺区域:</div>
                        <div class="messageBox_content"><span>山东省烟台市开发区</span></div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span></span>店铺详细地址:</div>
                        <div class="messageBox_content"><span>山东省烟台市开发区秦淮河路999号</span></div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span>*</span>营业状态:</div>
                        <div class="messageBox_content">
                            <a-select default-value="lucy" style="width: 120px" @change="handleChange">
                                <a-select-option value="jack">
                                    Jack
                                </a-select-option>
                                <a-select-option value="lucy">
                                    Lucy
                                </a-select-option>
                                <a-select-option value="disabled" disabled>
                                    Disabled
                                </a-select-option>
                                <a-select-option value="Yiminghe">
                                    yiminghe
                                </a-select-option>
                            </a-select>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span>*</span>营业时间:</div>
                        <div class="messageBox_content">
                            <!-- <a-range-picker
                            :show-time="{ format: 'HH:mm' }"
                            format="YYYY-MM-DD HH:mm"
                            :placeholder="['Start Time', 'End Time']"
                            @change="onChange"
                            @ok="onOk"
                            /> -->
                            <a-input placeholder="请填写店铺的联系方式" style="width:70%;" />
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span>*</span>店铺联系方式:</div>
                        <div class="messageBox_content">
                            <a-input placeholder="请填写店铺的联系方式" style="width:70%;" />
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span>*</span>店铺描述信息:</div>
                        <div class="messageBox_content">
                            <a-textarea placeholder="请填写店铺描述信息" :rows="4" style="width:70%;" />
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="messageBox">
                        <div class="messageBox_title"><span>*</span>店铺图片:</div>
                        <div class="messageBox_content">
                            <div class="clearfix" style="width:1000%;">
                                <a-upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    list-type="picture-card"
                                    :file-list="fileList"
                                    @preview="handlePreview"
                                    @change="handleChange"
                                    >
                                    <img src="../../assets/setUpShop/img_upload.png" alt="">
                                    <div v-if="fileList.length < 6">
                                        <!-- <a-icon type="plus" />
                                        <div class="ant-upload-text">
                                        Upload
                                        </div> -->
                                    </div>
                                    </a-upload>
                                    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancelImg">
                                    <img alt="example" style="width: 100%" :src="previewImage" />
                                </a-modal>
                                <div style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #71757A;line-height: 14px;">展示您的店铺图片，最多可以上传6张（第一张为首页轮播首图展示），图片格式为jpg、png。</div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24">
                    <div class="buttonBox">
                        <a-button @click="showModal">
                            保存
                        </a-button>
                        <a-button type="primary" class="btn_bg" @click="info">
                            确认提交
                        </a-button>
                    </div>
                </a-col>
            </a-row>
        </div>
        <a-modal
            title="Title"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
        >
            <p>{{ ModalText }}</p>
        </a-modal>
    </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  data() {
    return {
        ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,


      previewVisible: false,
      previewImage: "",
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
          uid: "-3",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
          uid: "-4",
          name: "image.png",
          status: "done",
          url:
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        },
        {
          uid: "-5",
          name: "image.png",
          status: "error"
        }
      ]
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    // 提交弹出框
    info() {
      const h = this.$createElement;
      this.$info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    // 图片
    handleCancelImg() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    }
  }
};
</script>
<style lang="scss" scoped>
.setUpShop {
  h2 {
    font-weight: bold;
  }
  .setUpShop_content {
      margin-left: 1%;
    .messageBox {
      width: 80%;
      display: flex;
      margin-bottom: 1%;
      .messageBox_title {
        width: 15%;
        text-align: right;
        margin-right: 2%;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: bold;
        color: #192029;
        span {
          color: #e82037;
        }
      }
      .messageBox_content{
        width: 100%;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #494D52;
        // .img_bg{
            // background: url(../../assets/setUpShop/img_upload.png)
            img{
                width: 100%;
                height: 100%;
            }
        // }
      }
    }
    .buttonBox{
        width: 80%;
        display: flex;
        justify-content: center;
        button{
            border: 1px solid #e82037;
        }
        .btn_bg{
            background: #e82037;
            margin-left: 30px;
        }
    }
  }
}
// 图片
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
//   margin-top: 8px;
  color: #666;
}

.ant-upload-list-picture-card-container{
    width: 130px!important;
}
.ant-upload-list-picture-card .ant-upload-list-item{
    width: 130px!important;
}
</style>

