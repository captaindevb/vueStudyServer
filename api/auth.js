const { authLogin } = require('../models')
const encryption = require('./encryption')

const login = async (req, res) => {
   console.log('==== LOGIN ====')
   console.log('req.body = ', req.body)

   const email = req.body.userInfo.username //userInfo로 바꾼 이유 !! 리팩토링과정에서 바뀜 !! 
   const password = req.body.userInfo.password

   const loginInfo = await authLogin.findOne({ where: { email } })

   if (!loginInfo) return res.status(401).json({error: 'NOT FIND LOGIN INFO'}) //아이디못찾
   
   //console.log(loginInfo)

   const pwChk = await encryption(password, loginInfo.dataValues.salt)

   console.log('pwdChk = ', pwChk)

   if(loginInfo.dataValues.password === pwChk.password) {
      res.json({body: loginInfo.dataValues.email})
   } else {
      res.status(401).json({error: 'NOT FIND LOGIN INFO'}) //비밀번호틀림
   }

   // return

   // const resLogin = await authLogin.findOne({
   //    attributes: [
   //       'id',
   //       'email',
   //       [authLogin.sequelize.fn('left', authLogin.sequelize.col('createdAt'), 10), 'date']
   //    ],
   //    where: { email, password}
   // })

   //  console.log(resLogin)

   //  if (resLogin) {
   //      res.json({body: resLogin.dataValues})
   //  } else {
   //      res.status(401).json({error: 'NOT FINT LOGIN INFO'})
   //  }
}

const join = async (req, res) => {
   console.log('=== join ===')
   console.log('req.body = ', req.body)

   const { usermail, password } = req.body.form //구조분해할당

   const pwObj = await encryption(password) //promise then 과 같음. 더 간결한 문법 
   console.log('pwObj = ', pwObj)

   //return

   const joinResult = await authLogin.create({
      email: usermail,
      password: pwObj.password,
      salt: pwObj.salt
   })

   //console.log('joinResult = ', joinResult)

   if (joinResult) res.json ( { body: joinResult.email} )
   else res.status(401).json( {error: 'JOIN ERROR'} )
}

module.exports = {
   login, join
}