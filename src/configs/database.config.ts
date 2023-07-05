import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('database', () => ({
  sslActive: process.env.BDD_SSL === 'true',
  logging: process.env.ORM_LOGGER_ENABLED === 'true',

  port: process.env.BDD_PORT || 5455,
  host: process.env.BDD_HOST || '127.0.0.1',
  password: process.env.DB_PASSWORD || 'root',
  username: process.env.BDD_USERNAME || 'root',
  database: process.env.BDD_DATABASE || 'blog',
}));
