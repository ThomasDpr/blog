import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
  passwordSalt: process.env.PASSWORD_SALT || 10,
  jwtExpireIn: process.env.JWT_EXPIRE_IN || '1d',
}));
