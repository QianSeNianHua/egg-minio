import Minio from '@types/minio';

declare module 'egg' {
  // extend app
  interface Application {
    minio: Minio.Client;
  }
}
