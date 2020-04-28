<template>
  <div class="classPicture">
    <vDetail></vDetail>
    <div class="main">
      <div class="cardItem" v-for="item in 8" :key="item" @click="openPicture()">
        <div class="imgB">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            alt
          />
        </div>
        <div class="words">
          <span>发布人：</span>
          <span>XXXX</span>
        </div>
      </div>
    </div>
    <div class="btnBox">
      <el-button type="primary" @click="uploadImg()">上传图片</el-button>
    </div>
  </div>
</template>

<script>
import vDetail from './ccommon/classDetail'
export default {
  components: {
    vDetail
  },
  data() {
    return {
      currentDate: new Date()

    }
  },
  methods: {
    uploadImg() {

    },
    openPicture() {
      let imgHTML = '<img style="width: 100%;" src = "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"alt/>'
      this.$alert(imgHTML, '', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '关闭',
        showConfirmButton: true,
        center: true
      });
    }

  }

}

</script>``
<style scoped>
.main {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
.cardItem {
  width: 25%;
  max-width: 200px;
  background-color: #fff;
  padding: 5px;
  margin: 0 20px 20px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.cardItem img {
  width: 100%;
}
.cardItem .words {
  padding: 10px;
  text-align: center;
}
.btnBox {
  margin-top: 20px;
  text-align: center;
}
.openPicture {
  width: 500px;
}
.openPicture img {
  width: 100%;
}
</style>