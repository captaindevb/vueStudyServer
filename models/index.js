'use strict';


const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

//최종적인 테이블 추가 해주는 곳

db.notice = require('./notice')(sequelize, Sequelize) //즉시실행
db.authLogin = require('./login')(sequelize, Sequelize)

module.exports = db;
