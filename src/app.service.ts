//================================================================================//
// > Ce fichier contient le service racine de l'application                       //
// > Il est responsable de la logique métier de l'application                     //
// > Il peut être injecté dans les contrôleurs, et dans d'autres services         //
//================================================================================//

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
