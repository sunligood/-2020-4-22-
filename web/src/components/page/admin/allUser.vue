<template>
  <div class="allUser">
    <div class="searchBox">
      <div class="inputBox">
        <el-select v-model="form.systems" placeholder="请选择系别" @change="getChild(form.systems)">
          <el-option
            v-for="obj in  systemsList"
            :key="obj.code"
            :label="obj.name"
            :value="obj.name"
          ></el-option>
        </el-select>
      </div>
      <div class="inputBox">
        <el-select v-model="form.major" placeholder="请选择专业">
          <el-option
            v-for="item in childList"
            :key="item.code"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </div>
      <div class="inputBox">
        <el-input v-model="form.class" placeholder="请输入班级"></el-input>
      </div>

      <el-button type="primary" @click="searchFn('search')">查询</el-button>
      <el-button type="primary" @click="searchFn('return')">重置</el-button>
    </div>
    <div class="tableBox">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" width="50" type="index" :index="indexMethod(1)"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column align="center" prop="systems" label="系别"></el-table-column>
        <el-table-column align="center" prop="major" label="专业"></el-table-column>
        <el-table-column align="center" prop="class" label="班级"></el-table-column>
        <el-table-column align="center" prop="sex" label="性别"></el-table-column>
        <el-table-column align="center" prop="mobile" label="电话"></el-table-column>
        <el-table-column align="center" prop="email" label="email"></el-table-column>
        <el-table-column align="center" prop="address" label="现住地址"></el-table-column>
        <el-table-column align="center" fixed="right" width="150" label="操作">
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
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="学号">
          <el-input v-model="form.emp_no" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="系别">
          <el-select v-model="form.systems" placeholder="请选择系别" @change="getChild(form.systems)">
            <el-option
              v-for="obj in  systemsList"
              :key="obj.code"
              :label="obj.name"
              :value="obj.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业">
          <el-select v-model="form.major" placeholder="请选择专业">
            <el-option
              v-for="item in childList"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.class" placeholder="请输入班级"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.mobile" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="form.email" placeholder="请输入email"></el-input>
        </el-form-item>
        <el-form-item label="现住地址">
          <el-input v-model="form.address" placeholder="请输入现住地址"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeUserInfo()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { sysList } from '../../../mock/data/sysList'
export default {
  data() {
    return {
      search: '',
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      form: {
        systems: '',
        class: '',
        major: ''
      },
      dialogFormVisible: false,
      systemsList: [],
      childList: [],
    }
  },
  methods: {
    indexMethod(index) {
      return index++;
    },
    // 编辑按钮
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.form = row
      this.form.userID = row.userID
      this.form.root = 0
      for (let i = 0; i < this.systemsList.length; i++) {
        for (let key in this.systemsList[i]) {
          if (this.systemsList[i]['name'] == row.systems) {
            this.childList = this.systemsList[i]['child']
            return false
          }
        }
      }
    },
    // 编辑保存
    changeUserInfo() {
      this.$axios.post('/updateStu', this.form)
        .then(res => {
          if (res.data.code == 1) {
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
            this.dialogFormVisible = false
          } else {
            this.$message.error('修改失败！')
          }
        })
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm('确定删除此用户？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确定操作
        var parms = {
          userID: row.userID
        }
        this.$axios.post('/deleteStu', parms)
          .then(res => {
            if (res.data.code == 1) {
              this.$message({
                type: 'success',
                message: '删除成功！'
              });

              this.flushTable()
            }
          })
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
    flushTable() {
      this.$axios.post('/queryStu')
        .then(res => {
          this.tableData = res.data.data
        })
    },
    // 通过系别自动获取专业
    getChild(name) {
      let parentName = name
      this.tableData.major = ''
      for (let i = 0; i < this.systemsList.length; i++) {
        for (let key in this.systemsList[i]) {
          if (this.systemsList[i]['name'] == parentName) {
            this.childList = this.systemsList[i]['child']
            return false
          }
        }
      }
    },
    searchFn(type) {
      if (type == 'return') {
        // 重置
        this.form = {
          systems: '',
          major: '',
          class: ''
        }
        this.childList = []
        this.$axios.post('/queryStu', this.form)
          .then(res => {
            if (res.data.code == 1) {
              this.tableData = res.data.data
            }
          })
      } else {
        this.$axios.post('/queryStu', this.form)
          .then(res => {
            if (res.data.code == 1) {
              this.tableData = res.data.data
              for (let i = 0; i < this.tableData.length; i++) {
                for (let key in this.tableData[i]) {
                  if (key == 'content') {
                    let str = this.tableData[i][key]
                    if (str != null) {
                      this.tableData[i][key] = str.replace(badWords, function (s) {
                        var str = "";
                        for (var i = 0; i < s.length; i++) {
                          str += "*";
                        }
                        return str;
                      });
                    }

                  }
                }
              }
            }
          })
      }
    }

  },
  created() {
    this.$axios.post('/queryStu')
      .then(res => {
        this.tableData = res.data.data
      })
  },
  mounted() {
    this.systemsList = sysList
  }

}

</script>
<style scoped>
.allUser {
  background-color: #fff;
  padding: 20px;
}
.page {
  background-color: #fff;
  margin-top: 20px;
  text-align: right;
}
.searchBox {
  padding-bottom: 20px;
}
.inputBox {
  width: 200px;
  display: inline-block;
  margin-right: 20px;
}
</style>