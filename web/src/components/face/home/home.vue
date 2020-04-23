<template>
  <div class="home">
    <v-head></v-head>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="400px">
        <el-carousel-item v-for="(item, index) in 4" :key="index">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="news-box">
      <div class="news-title">新闻栏</div>
      <div class="news-body">
        <div class="news-item" v-for="(item, index) in newsList" :key="index">
          <span class="words">
            <span class="index">{{index + 1}}</span>
            .{{item.content}}
          </span>
          <span class="time">{{item.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "@/components/face/common/header";
export default {
  components: {
    vHead
  },
  data() {
    return {
      bannerData: [],
      newsList: [
        {
          content: '这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容',
          time: '2020年4月23日12:29:12'
        },
        {
          content: '这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容',
          time: '2020年4月23日12:29:12'
        },
        {
          content: '这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容',
          time: '2020年4月23日12:29:12'
        },
        {
          content: '这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容',
          time: '2020年4月23日12:29:12'
        }
      ]
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* main css */
.banner {
  width: 80%;
  margin: 20px auto;
}
.news-box {
  position: relative;
  padding: 20px;
}
.news-box .news-title {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.news-box .news-item {
  width: 600px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
}
.news-box .news-item .words {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-box .news-item .words .index {
  font-size: 18px;
  font-weight: bold;
}
.news-box .news-item:hover {
  color: blue;
}
</style>