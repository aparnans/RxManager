const Sequelize = require("sequelize");
module.exports = new Sequelize(
    'prescription_db', 
    'root', 
    'MyPwd#1', 
    {host: 'localhost',
     dialect: 'mysql',
  
        pool: {
        max: 5,
        min: 0,
        idle: 10000
        }
    });