<template>
  <div class="allUser">
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
        <el-table-column align="center" prop="email" show-overflow-tooltip="true" label="email"></el-table-column>
        <el-table-column align="center" prop="address" show-overflow-tooltip="true" label="现住地址"></el-table-column>
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
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
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
          <el-input v-model="form.sex" placeholder="请输入性别"></el-input>
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
export default {
  data() {
    return {
      search: '',
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      form: {},
      dialogFormVisible: false,
      systemsList: [
        {
          code: 0,
          name: '经济管理学院',
          child: [
            {
              code: 0,
              name: '工商管理专业',
              child: []
            },
            {
              code: 1,
              name: '财务管理专业',
              child: []
            },
            {
              code: 2,
              name: '金融工程专业',
              child: []
            },
            {
              code: 3,
              name: '工程管理专业',
              child: []
            },
            {
              code: 4,
              name: '物流管理专业',
              child: []
            },
            {
              code: 5,
              name: '旅游管理专业',
              child: []
            },
            {
              code: 6,
              name: '酒店管理专业',
              child: []
            }
          ]
        },
        {
          code: 1,
          name: '机械与动力工程学院',
          child: [
            {
              code: 0,
              name: '能源与动力工程专业介绍',
              child: []
            },
            {
              code: 1,
              name: '材料成型与控制工程专业',
              child: []
            },
            {
              code: 2,
              name: '车辆工程专业',
              child: []
            },
            {
              code: 3,
              name: '机械工程专业',
              child: []
            }
          ]
        },
        {
          code: 2,
          name: '土木建筑工程学院',
          child: [
            {
              code: 0,
              name: '土木工程专业',
              child: []
            },
            {
              code: 1,
              name: '工程造价专业',
              child: []
            }
          ]
        },
        {
          code: 3,
          name: '电子与电气工程学院',
          child: [
            {
              code: 0,
              name: '电气工程及其自动化'
            },
            {
              code: 1,
              name: '光电信息科学与工程'
            },
            {
              code: 2,
              name: '测控技术与仪器'
            },
            {
              code: 3,
              name: '自动化'
            }
          ]
        },
        {
          code: 4,
          name: '计算机与信息技术学院',
          child: [
            {
              code: 0,
              name: '计算机科学与技术专业'
            },
            {
              code: 1,
              name: '软件工程专业'
            },
            {
              code: 2,
              name: '物联网工程专业'
            },
            {
              code: 3,
              name: '电子商务专业'
            },
            {
              code: 4,
              name: '数据科学与大数据技术专业'
            }
          ]
        },
        {
          code: 5,
          name: '轨道交通学院',
          child: [
            {
              code: 0,
              name: '交通运输'
            },
            {
              code: 1,
              name: '轨道交通信号与控制'
            }
          ]
        },
        {
          code: 6,
          name: '艺术学院',
          child: [
            {
              code: 0,
              name: '数学媒体艺术专业'
            },
            {
              code: 1,
              name: '风景园林专业'
            },
            {
              code: 2,
              name: '音乐学专业'
            },
            {
              code: 3,
              name: '视觉传达设计专业'
            },
            {
              code: 4,
              name: '环境设计专业'
            }
          ]
        },
        {
          code: 7,
          name: '外国语学院',
          child: [
            {
              code: 0,
              name: '英语专业'
            },
            {
              code: 1,
              name: '商务英语'
            }
          ]
        },
        {
          code: 8,
          name: '化学工程学院',
          child: [
            {
              code: 0,
              name: '化学工程与工艺专业'
            },
            {
              code: 1,
              name: '资源循环科学与工程专业'
            },
            {
              code: 2,
              name: '制药工程专业'
            },
            {
              code: 3,
              name: '过程装备与控制工程专业'
            }
          ]
        }
      ],
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
      this.ruleForm.major = ''
      for (let i = 0; i < this.systemsList.length; i++) {
        for (let key in this.systemsList[i]) {
          if (this.systemsList[i]['name'] == parentName) {
            this.childList = this.systemsList[i]['child']
            return false
          }
        }
      }
    }

  },
  created() {
    this.$axios.post('/queryStu')
      .then(res => {
        this.tableData = res.data.data
      })
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
</style>