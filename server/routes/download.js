const express = require('express')
const router = express.Router()
const {mysql, sqlFormat} = require('../mysql/index')

router.post('/', (req, res) => {
  let body = req.body
  let sql = `select * from upload`
  mysql.query(sql, (err, result) => {
    result = sqlFormat(result)
    res.send({
      code: 1,
      msg: '登录成功',
      responseObject: result
    })
  })
})

module.exports = router