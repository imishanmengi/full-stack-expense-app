const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenses', 'root', 'Ishan@01' ,
{dialect: 'mysql', host: 'localhost'});

module.exports =  sequelize;