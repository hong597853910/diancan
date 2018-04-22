<style lang="stylus" scoped>
.detailWrapper
  position fixed
  left 0
  top 0
  bottom 48px
  width 100%
  background #fff
  transition all 0.4s ease
  &.move-enter-active,&.move-leave-active{
    transform translate3d(0,0,0)
  }
  &.move-enter,&.move-leave-active{
    transform translate3d(100%,0,0)
  }
.orderDetail
  border-bottom solid 1px #eee
  .back
    color #444
    font-weight: 500
    top 12px
    left 6px
    font-size 16px
    padding 10px
.operation
  padding 10px
  .change-value
    float right 
    margin 10px
.sexRadio
  margin-left 40px
</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


<template lang="html">
  <transition name="move">
    <div class="detailWrapper" ref="detailWrapper" v-show="showInfoDetail">
      <div class="orderDetail">
        <div class="back" @click="detailShowToggle()">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          {{headTitle}}
        </div>
      </div>
      <div class="operation">
        <el-input v-model="input" v-if="type==2?true:false" :name="name" :placeholder="headTitle"></el-input>
        <div class="sexRadio" :name="name" v-if="type==3?true:false">
            <el-radio v-model="radio" label="1" border size="medium">男</el-radio>
            <el-radio v-model="radio" label="2" border size="medium">女</el-radio>
        </div>
        <div class="sexRadio" v-if="type==1?true:false">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-button class="change-value"  type="primary" @onclick="submitChangeInfo()">修改</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {
  },
  props: {
    headTitle: '',
    component:'',
    type:'',
  },
  data() {
    return {
      showInfoDetail: false,
      input:'',
      radio:'',
      imageUrl: '',
    }
  },
  methods: {
    detailShowToggle() {
      this.showInfoDetail = !this.showInfoDetail
      this.imageUrl='';
      this.input='';
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitChangeInfo(){
      
    },
   }
}

</script>


