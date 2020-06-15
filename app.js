'use strict';

const minio = require('./lib/minio');

module.exports = app => {
  minio(app);
};
