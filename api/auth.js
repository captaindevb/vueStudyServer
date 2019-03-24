const { authLogin } = require('../models')

const login = async (req, res) => {
   console.log('==== LOGIN ====')
   console.log('req.body = ', req.body)

   const email = req.body.data.username
   const password = req.body.data.password
   
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