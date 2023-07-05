import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CustomBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @CreateDateColumn({ nullable: true })
  public createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  public updatedAt?: Date;
}
