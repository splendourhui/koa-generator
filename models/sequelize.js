'use strict';

const Sequelize = require('sequelize');
const config = require('../config');

module.exports = new Sequelize(config.db.dbName,
  config.db.username,
  config.db.password,
  {
    host: config.db.dbUrl,
    dialect: config.db.dialect,
    port: config.db.port,
    pool: {
      max: config.db.pool.maxConnections,
      min: config.db.pool.minConnection
    },
    define: {
      timestamps: false
    }
  }
);
