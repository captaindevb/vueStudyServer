const { authLogin } = require('../models')

const login = async (req, res) => {
   console.log('==== LOGIN ====')
   console.log('req.body = ', req.body)

   const email = req.body.userInfo.username //userInfo로 바꾼 이유 !! 리팩토링과정에서 바뀜 !! 
   const password = req.body.userInfo.password
   
   const resLogin = await authLogin.findOne({
      attributes: [
         'id',
         'email',
         [authLogin.sequelize.fn('left', authLogin.sequelize.col('createdAt'), 10), 'date']
      ],
      where: { email, password}
   })

    console.log(resLogin)

    if (resLogin) {
        res.json({body: resLogin.dataValues})
    } else {
        res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    }
}

module.exports = {
   login
}