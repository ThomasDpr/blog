//================================================================================//
// > Ce fichier définit le module racine de l'application                         //
// > Il importe tous les autres modules que notre application a besoin            //
//================================================================================//

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GetDatabaseConfig } from './utils/typeorm.utils';
import { config } from './configs';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: config,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: GetDatabaseConfig,
    }),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
