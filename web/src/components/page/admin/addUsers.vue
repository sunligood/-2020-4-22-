<template>
  <div class="addUsers">
    <div class="formBox">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学号" prop="emp_no">
          <el-input v-model="ruleForm.emp_no" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="ruleForm.sex" placeholder="请输入性别"></el-input>
        </el-form-item>
        <el-form-item label="系别" prop="systems">
          <el-select
            v-model="ruleForm.systems"
            placeholder="请选择系别"
            @change="getChild(ruleForm.systems)"
          >
            <el-option
              v-for="obj in  systemsList"
              :key="obj.code"
              :label="obj.name"
              :value="obj.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-select v-model="ruleForm.major" placeholder="请选择专业">
            <el-option
              v-for="item in childList"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="class">
          <el-input v-model="ruleForm.class" placeholder="请输入班级"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入email"></el-input>
        </el-form-item>
        <el-form-item label="现住地址" prop="address">
          <el-input v-model="ruleForm.address" placeholder="请输入现住地址"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ruleForm: {
        emp_no: '',
        name: '',
        sex: '',
        systems: '',
        major: '',
        class: '',
        mobile: '',
        email: '',
        address: '',
        root: 0
      },
      rules: {
        emp_no: [
          { required: true, message: '请输入学号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        systems: [
          { required: true, message: '请选择系别', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请选择专业', trigger: 'change' }
        ],
        class: [
          { required: true, message: '请选择班级', trigger: 'change' }
        ],
        mobile: [
          { required: true, message: '请输入电话', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入email', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/addStu', this.ruleForm)
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  message: '注册成功！',
                  type: 'success'
                });
              }
            })
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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

  }

}

</script>
<style scoped>
.addUsers {
  padding: 20px;
  background-color: #fff;
}
.formBox {
  width: 50%;
}
</style>