'use strict';

const minio = require('./lib/minio');

module.exports = agent => {
  minio(agent);
};
