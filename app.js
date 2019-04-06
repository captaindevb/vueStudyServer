const express = require('express') 
const app = express()
const bodyParser = require('body-parser') //데이터가공
const cors = require('cors')()
//const router = require('./router')
const sequelize = require('./models').sequelize
const notice = require('./api/notice')
const auth = require('./api/auth')
const upload = require('./api/upload')

app.use(cors)

sequelize.sync()

app.use(bodyParser.json({
  extended: true,
  limit: '100mb'
}))
app.use(bodyParser.urlencoded(
{
  extended: true,
  limit: '100mb'
}))

//항상 미들웨어 밑에 등록해주기
app.use(express.static('public'))

app.post('/notice', notice.create) //데이터 보낼때 

app.get('/notice/:noticeId', notice.detail) // : params로 받을 수 있음.

app.get('/notice', notice.list) //데이터 가져올때

app.put('/notice/:noticeId', notice.modify) //put: update

app.delete('/notice/:noticeId', notice.destroy) 

app.post('/login', auth.login)

app.post('/registration', auth.join)

app.post('/popup', upload.single('image'), require('./api/popup').create)
//upload 는 미들웨어로 사용, 미들웨어는 NEXT를 보내야한다. 

//RestAPIs POST/GET/PUT/DELETE 

//app.use(router)

//app.use('/notice/register', (req, res) => {
//    console.log('=============notice==============')
//})

/*배포전 주석처리*/

// app.use((req, res, next) => {
//   res.status = 404
//   next(Error('not found'))
// })
  
// app.use((err, req, res, next) => {
// console.log(err)
// res.status(res.statusCode || 500)
// res.json({ error: err.message || 'internal server error' })
// })

app.listen(3000, () => {
    console.log("3000port 대기중!")
})