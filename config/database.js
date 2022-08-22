const mysql = require('mysql2/promise');
const {logger} = require('./winston');


const pool = mysql.createPool({
    host: 'flower.cfeyrpadoh9b.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'flower123',
    database: 'flower'
});

module.exports = {
    pool: pool
};