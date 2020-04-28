<template>
  <div class="ownPeace">
    <div class="title">个人简介</div>
    <div class="img">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        alt
      />
      <el-button type="primary" v-show="isEdit">上传头像</el-button>
    </div>
    <div class="formBox">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="学号" prop="studentNo">
          <el-input v-model="ruleForm.emp_no" :disabled="isDisabled" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" :disabled="isDisabled" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="ruleForm.sex" :disabled="isDisabled" placeholder="请输入性别"></el-input>
        </el-form-item>
        <el-form-item label="系别" prop="systems">
          <el-select
            v-model="ruleForm.systems"
            placeholder="请选择系别"
            @change="getChild(ruleForm.systems)"
            :disabled="isDisabled"
          >
            <el-option
              v-for="obj in  systemsList"
              :key="obj.code"
              :label="obj.name"
              :value="obj.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major" :disabled="isDisabled">
          <el-select v-model="ruleForm.major" placeholder="请选择专业" :disabled="isDisabled">
            <el-option
              v-for="item in childList"
              :key="item.code"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="class">
          <el-input v-model="ruleForm.class" placeholder="请输入班级" :disabled="isDisabled"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile" :disabled="isDisabled" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="ruleForm.email" :disabled="isDisabled" placeholder="请输入email"></el-input>
        </el-form-item>
        <el-form-item label="现住地址" prop="address">
          <el-input v-model="ruleForm.address" :disabled="isDisabled" placeholder="请输入现住地址"></el-input>
        </el-form-item>
        <el-form-item label="爱好" prop="like">
          <el-input v-model="ruleForm.like" :disabled="isDisabled" placeholder="请输入爱好"></el-input>
        </el-form-item>
        <el-form-item label="个人说明" prop="explain">
          <el-input v-model="ruleForm.explain" :disabled="isDisabled" placeholder="请输入个人说明"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-show="!isEdit" @click="changStatus('edit')">编辑个人信息</el-button>
          <el-button type="primary" v-show="isEdit" @click="submitForm('ruleForm')">保存个人信息</el-button>
          <el-button v-show="isEdit" @click="changStatus('cancel')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {},
      isDisabled: true,
      isEdit: false,
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
      childList: []
    }
  },
  methods: {
    changStatus(status) {
      switch (status) {
        case 'edit':
          this.isEdit = true
          this.isDisabled = false
          break
        case 'cancel':
          this.isEdit = false
          this.isDisabled = true
          break
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleForm.root = 0
          this.ruleForm.userID = sessionStorage.getItem('userID')
          delete this.ruleForm.image
          this.$axios.post('/updateStu', this.ruleForm)
            .then(res => {
              if (res.data.code == 1) {
                this.$message({
                  type: 'success',
                  message: '修改成功！'
                });
                this.isEdit = false
                this.isDisabled = true
              } else {
                this.$message.error('修改失败！');
              }

            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
    this.ruleForm = {
      emp_no: sessionStorage.getItem('emp_no'),
      name: sessionStorage.getItem('name'),
      sex: sessionStorage.getItem('sex'),
      systems: sessionStorage.getItem('systems'),
      major: sessionStorage.getItem('major'),
      class: sessionStorage.getItem('class'),
      mobile: sessionStorage.getItem('mobile'),
      email: sessionStorage.getItem('email'),
      address: sessionStorage.getItem('address'),
      image: sessionStorage.getItem('image'),
      like: sessionStorage.getItem('like'),
      explain: sessionStorage.getItem('explain')
    }

    for (let i = 0; i < this.systemsList.length; i++) {
      for (let key in this.systemsList[i]) {
        if (this.systemsList[i]['name'] == sessionStorage.getItem('systems')) {
          this.childList = this.systemsList[i]['child']
          return false
        }
      }
    }
  }
}

</script>
<style scoped>
.ownPeace {
  background-color: #fff;
  padding: 20px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.img {
  width: 200px;
  margin: 10px 10px 10px 60px;
}
.img img {
  width: 100%;
}
.formBox {
  max-width: 500px;
}
</style>