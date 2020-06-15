'use strict';

/**
 * egg-minio default config
 * @member Config#minio
 * @property {String} SOME_KEY - some description
 */
exports.minio = {
  client: {
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: '',
    secretKey: '',
  }
};
