import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_city: number;

    @Column({length: 100})
    district: string;

    @Column({length: 100})
    street: string;

    @Column()
    number: number;

    @Column({length: 8})
    cep: string;

    @Column({length: 255, nullable: true})
    obs: string;

}