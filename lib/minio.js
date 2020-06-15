'use strict';

const assert = require('assert');

module.exports = app => {
  app.addSingleton('minio', createMinio);
};

function createMinio (config, app) {
  const Minio = app.config.minio.Minio || require('minio');
  let client;

  assert(config.endPoint && config.port && config.accessKey !== undefined && config.secretKey !== undefined,
    `[egg-minio] 'endPoint: ${config.endPoint}', 'port: ${config.port}', 'accessKey: ${config.accessKey}', 'secretKey: ${config.secretKey}' are required on config`);
  app.coreLogger.info('[egg-minio] server connecting minio://:***@%s:%s',
    config.endPoint, config.port);
  client = new Minio.Client(config);

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-minio] init instance success');
  });

  return client;
}
