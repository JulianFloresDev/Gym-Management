import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  host: (process.env.SQL_HOST as string) || 'localhost',
  port: Number(process.env.SQL_PORT) || 3306,
  username: process.env.SQL_USERNAME as string,
  password: process.env.SQL_PASSWORD as string,
  database: process.env.SQL_DATABASE as string,
};

export default config;
