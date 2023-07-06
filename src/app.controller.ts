//================================================================================//
// > Ce fichier contient le contrôleur racine de l'application                    //
// > Il est responsable de la gestion des requêtes HTTP entrantes                 //
// > Ainsi que de l'envoi des réponses HTTP appropriées                           //
//================================================================================//

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
