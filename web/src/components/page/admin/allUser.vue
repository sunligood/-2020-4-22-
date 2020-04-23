<template>
  <div class="allUser">
    <div class="tableBox">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" width="50" type="index" :index="indexMethod(1)"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column align="center" prop="tie" label="系别"></el-table-column>
        <el-table-column align="center" prop="major" label="专业"></el-table-column>
        <el-table-column align="center" prop="class" label="班级"></el-table-column>
        <el-table-column align="center" prop="sex" label="性别"></el-table-column>
        <el-table-column align="center" prop="phone" label="电话"></el-table-column>
        <el-table-column align="center" prop="email" show-overflow-tooltip="true" label="email"></el-table-column>
        <el-table-column align="center" prop="address" show-overflow-tooltip="true" label="现住地址"></el-table-column>
        <el-table-column align="center" fixed="right" width="200">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="medium" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
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
.page {
  background-color: #fff;
  padding: 10px;
  text-align: right;
}
</style>