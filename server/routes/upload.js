const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const { mysql, sqlFormat } = require('../mysql/index')

const uploadPath = path.resolve('public','uploadImg')
router.post('/', multer({
  //设置文件存储路径
  dest: uploadPath   //upload文件如果不存在则会自己创建一个。
}).single('file'), (req, res) => {
  let file = req.file;
  // multer返回是字符串，需要转成文件名 oldfilename -> newfilename
  fs.renameSync(uploadPath + '/' + file.filename, uploadPath + '/'  + file.originalname);
  let sql = `insert into upload(imagename) values (?)`
  let sqlData = [`/public/uploadImg/${file.originalname}`]
  mysql.query(sql, sqlData, (err) => {
    // 设置响应类型及编码
  res.set({
    'content-type': 'application/json; charset=utf-8'
  });
  res.end("上传成功！");
  })
})

module.exports = router