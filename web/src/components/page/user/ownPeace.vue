<template>
  <div class="ownPeace">
    <div class="title">个人简介</div>
    <div class="img">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        alt
      />
    </div>
    <div class="formBox">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="学号" prop="studentNo">
          <el-input v-model="ruleForm.studentNo" :disabled="isDisabled" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" :disabled="isDisabled" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="ruleForm.sex" :disabled="isDisabled" placeholder="请输入性别"></el-input>
        </el-form-item>
        <el-form-item label="系别" prop="tie">
          <el-select v-model="ruleForm.tie" :disabled="isDisabled" placeholder="请选择系别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-select v-model="ruleForm.major" :disabled="isDisabled" placeholder="请选择专业">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="class">
          <el-select v-model="ruleForm.class" :disabled="isDisabled" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
      ruleForm: {
        studentNo: '',
        name: '',
        sex: '',
        tie: '',
        major: '',
        class: '',
        mobile: '',
        email: '',
        address: ''
      },
      isDisabled: true,
      isEdit: false
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
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
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
  width: 50%;
}
</style>