import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class State {
    @PrimaryColumn({length: 2, nullable: false})
    acronym: string;

    @Column({length: 50, nullable: false, unique: true})
    name: string;
}