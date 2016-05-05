/**
 * @Author: SplendourHui
 * @Date:   2016-05-04 20:52
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 19:59
 */



'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('config').get('db');

module.exports = new Sequelize(dbConfig.dbName,
  dbConfig.username,
  dbConfig.password, {
    host: dbConfig.dbUrl,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: {
      max: dbConfig.pool.maxConnections,
      min: dbConfig.pool.minConnection
    },
    define: {
      timestamps: false
    }
  }
);
