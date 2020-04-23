<template>
  <div class="messages">
    <div class="tableBox">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column align="center" label="序号" width="50" type="index" :index="indexMethod(1)"></el-table-column>
        <el-table-column align="center" prop="name" label="发布人"></el-table-column>
        <el-table-column align="center" prop="class" label="班级"></el-table-column>
        <el-table-column align="center" prop="sex" label="发布时间"></el-table-column>
        <el-table-column align="center" prop="phone" label="内容"></el-table-column>
        <el-table-column align="center" fixed="right" width="200">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="medium" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="fotter">
      <div class="btnBox">
        <el-button type="primary">批量删除</el-button>
      </div>
      <div class="pageBox">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tableData: [{
        name: '王小虎',
        tie: '计算机',
        major: '网页设计',
        address: '上海市普陀区金沙江路 1518 弄',
        class: '网页设计2班',
        sex: '男',
        phone: '13111111111',
        email: 'sunligood@githum.com'
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    indexMethod(index) {
      return index++;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm('确定删除此用户？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确定操作
        this.$message({
          type: 'success',
          message: row
        });
      }).catch(() => {
        // 取消操作
      });
    },
    // page fn
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }

  }

}

</script>
<style scoped>
.fotter {
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>