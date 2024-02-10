const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('/*database*/', 'postgres', 'choclata',{
  host: 'localhost',
  dialect: 'postgres',
})

async function Connection(){
  try{
    await sequelize.authenticate()
    console.log('Connectied successfully')}
  catch(error){
    console.log(error)} 
}

const Cars = sequelize.define('Cars', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 imageUrl: {
  type: DataTypes.STRING,
  allowNull: false,
 },
});

module.exports = {Connection,Cars};