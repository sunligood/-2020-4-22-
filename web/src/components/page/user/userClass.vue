<template>
  <div class="userClass">
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
          <el-table-column align="center" prop="systems" label="系别"></el-table-column>
          <el-table-column align="center" prop="major" label="专业"></el-table-column>
          <el-table-column align="center" prop="class" label="班级"></el-table-column>
          <el-table-column align="center" prop="sex" label="性别"></el-table-column>
          <el-table-column align="center" prop="mobile" label="电话"></el-table-column>
          <el-table-column align="center" prop="email" label="email"></el-table-column>
          <el-table-column align="center" prop="address" label="现住地址"></el-table-column>
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
    // page fn
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    let data = this.$route.query.userData
    sessionStorage.setItem('systems', data.systems)
    sessionStorage.setItem('major', data.major)
    sessionStorage.setItem('class', data.class)
    sessionStorage.setItem('address', data.address)
    sessionStorage.setItem('email', data.email)
    sessionStorage.setItem('emp_no', data.emp_no)
    sessionStorage.setItem('explains', data.explains)
    sessionStorage.setItem('image', data.image)
    sessionStorage.setItem('hobby', data.hobby)
    sessionStorage.setItem('mobile', data.mobile)
    sessionStorage.setItem('name', data.name)
    sessionStorage.setItem('userID', data.userID)
    sessionStorage.setItem('sex', data.sex)
    sessionStorage.setItem('password', data.password)

    let parms = {
      systems: data.systems,
      major: data.major,
      class: data.class
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
}
.page {
  background-color: #fff;
  padding: 10px;
  text-align: right;
}
.tableBox {
  padding: 10px;
}
</style>