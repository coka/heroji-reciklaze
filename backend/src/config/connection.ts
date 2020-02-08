import * as typeorm from 'typeorm';

import { MODELS } from './models';
const connection = typeorm.createConnection({
  name: Math.random().toString(),
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: MODELS,
  synchronize: true,
  logging: true
});

export const getConnection = async () => {
  //TODO check if connection is not closed
  return await connection;
};
