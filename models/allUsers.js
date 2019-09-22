module.exports = function(sequelize, Datatypes){
    var allUsers = sequelize.define('user_info',{
        user_name : sequelize.STRING,
        address: sequelize.STRING,
        email: sequelize.STRING,
        age: sequelize.integer
    });

    
}