import { CustomBaseEntity } from 'src/shared/providers/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class Users extends CustomBaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  public email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public password: string;
}
