import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Pack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 24, unique: true, nullable: false })
  name: string;
}
