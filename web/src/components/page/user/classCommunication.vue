<template>
  <div class="classCommunication">
    <vDetail></vDetail>
    <div class="main">
      <div class="tableBox">
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
        >
          <el-table-column
            align="center"
            label="序号"
            width="50"
            type="index"
            :index="indexMethod(1)"
          ></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="80"></el-table-column>
          <el-table-column align="center" prop="sex" label="性别"></el-table-column>
          <el-table-column align="center" prop="mobile" label="电话"></el-table-column>
          <el-table-column align="center" prop="email" label="email"></el-table-column>
          <el-table-column align="center" prop="address" label="现住址"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
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
      search: '',
      tableData: [],
      currentPage: 5,
      pageSize: 10
    }
  },
  methods: {
    indexMethod(index) {
      return index++;
    },
    // page fn
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    let parms = {
      systems: sessionStorage.getItem('systems'),
      major: sessionStorage.getItem('major'),
      class: sessionStorage.getItem('class'),
    }
    this.$axios.post('/queryStu', parms)
      .then(res => {
        this.tableData = res.data.data
      })
  }

}

</script>
<style scoped>
.main {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
}
.searchBox {
  padding-bottom: 20px;
}
.inputBox {
  width: 200px;
  display: inline-block;
  margin-right: 20px;
}
.tableBox {
  background-color: #fff;
}
.page {
  margin-top: 10px;
  background-color: #fff;
  text-align: right;
}
</style>