import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TypeOfDatabase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    type: string;

    @Column({length: 30})
    plugin: string;
}