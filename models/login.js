module.exports = (sequelize, DataTypes) => {
   return sequelize.define('login', {
       email: {
           type: DataTypes.STRING(50),
           allowNull: false
       },
       password: {
           type: DataTypes.STRING(100),
           allowNull: false
       },
       name: {
           type: DataTypes.STRING(20),
           //allowNull: false
       },
       salt: {
           type: DataTypes.STRING(100),
           allowNull: false
       }
   },
   {
       timestamps: true,
       paranoid: true
   })
}