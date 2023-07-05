import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { TlsOptions } from 'tls';

export function GetDatabaseConfig(
  configService: ConfigService,
): TypeOrmModuleOptions {
  let ssl: boolean | TlsOptions | undefined = false;
  const bddSSL = configService.get('database.sslActive') as boolean;

  if (bddSSL) {
    ssl = bddSSL;
  }

  return {
    logging: true,
    type: 'postgres',
    synchronize: false,
    host: configService.get('database.host'),
    database: configService.get('database.database'),
    username: configService.get('database.username'),
    password: configService.get('database.password'),
    ssl: ssl ? { rejectUnauthorized: false } : undefined,
    port: parseInt(configService.get('database.port') as string, 10),
    migrations: [join(__dirname, '..', 'migrations', '*.ts')],
    entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
  };
}
