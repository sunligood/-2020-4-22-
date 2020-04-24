<template>
  <div class="leavingMsg">
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
          <el-table-column align="center" prop="phone" label="电话"></el-table-column>
          <el-table-column align="center" prop="email" show-overflow-tooltip="true" label="email"></el-table-column>
          <el-table-column align="center" prop="content" show-overflow-tooltip="true" label="内容"></el-table-column>
          <el-table-column align="center" prop="time" show-overflow-tooltip="true" label="留言时间"></el-table-column>
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
    <div class="btnBox">
      <el-button type="primary" @click="sendMsg()">添加留言</el-button>
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
      tableData: [{
        name: '王小虎',
        sex: '男',
        phone: '13111111111',
        email: 'sunligood@githum.com',
        content: '这里是留言内容这里是留言内容这里是留言内容',
        time: '2020年4月24日14:32:19'
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
    },
    // 提交留言
    sendMsg() {
      this.$prompt('请输入留言内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        roundButton: true
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你输入的留言内容是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }

  }

}

</script>
<style scoped>
.main {
  background-color: #fff;
  margin-top: 10px;
}
.tableBox {
  padding: 10px;
}
.page {
  background-color: #fff;
  padding: 10px;
  text-align: right;
}
.btnBox {
  margin-top: 200px;
  text-align: center;
}
</style>