<template>
  <div class="home">
    <v-head></v-head>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="400px">
        <el-carousel-item v-for="(item, index) in bannerData" :key="index">
          <h3>
            <img :src="item" alt />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="news-box">
      <div class="news-title">
        <span>新闻</span>
        <span class="more">更多</span>
      </div>
      <div class="news-body">
        <div
          class="news-item"
          v-for="(item, index) in newsList"
          :key="index"
          @click="goPosts(index)"
        >
          <div style="padding: 0 20px">
            <img :src="item.image" width="100%" height="250px" />
          </div>
          <div style="padding: 0 20px">
            <p class="words title">{{item.title}}</p>
            <p class="wordsTow contents">{{contents(item.content)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from '@/components/face/common/header'
import Posts from '@/assets/posts.json'
import banner1 from '@/assets/img/banner/banner1.jpg'
import banner2 from '@/assets/img/banner/banner2.jpg'
import banner3 from '@/assets/img/banner/banner3.jpg'
export default {
  components: {
    vHead
  },
  data() {
    return {
      bannerData: [banner1, banner2, banner3],
      newsList: Posts
    }
  },
  methods: {
    // 跳转文章详情
    goPosts(index) {
      this.$router.push({
        path: '/posts',
        query: { index: index, type: 'home' }
      })
    },
    contents(content) {
      let str = ''
      content.forEach(item => {
        str += item
      })
      return str
    }
  }
}
</script>
<style scoped>
/* banner css */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
/* banner css */
.el-carousel__item h3 img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* main css */
.home {
}
.banner {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.news-box {
  position: relative;
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
}
.news-body {
  display: flex;
  flex-wrap: wrap;
}
.news-box .news-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #000;
  font-size: 25px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dcdfe6;
}
.news-title .more {
  font-size: 12px;
  cursor: pointer;
}
.news-box .news-item {
  width: 50%;
  /* display: flex;
  justify-content: space-between; */
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
}
.news-box .news-item .words {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-box .news-item .wordsTow {
  height: 35px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-box .news-item .title {
  font-size: 16px;
  font-weight: bold;
}
.news-box .news-item .contents {
  padding-top: 10px;
  color: #a1a1a1;
  font-size: 12px;
}
.news-box .news-item:hover,
.more:hover {
  color: blue !important;
}
</style>