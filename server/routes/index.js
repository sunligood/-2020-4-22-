module.exports = function (app) {
  app.use('/signin', require('./signin'))
  app.use('/signup', require('./signup'))
  app.use('/posts', require('./posts'))
  app.use('/upload', require('./upload'))
  app.use('/download', require('./download'))
}