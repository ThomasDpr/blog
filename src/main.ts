//================================================================================//
// > Il sagit du point dentrée de l'application                                   //
// > Il crée une instance de l'application NestJS, la configure et la lance       //
//================================================================================//

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
