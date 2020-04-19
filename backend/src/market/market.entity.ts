import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Market {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 100})
    logo: string;

    @Column({length: 14})
    cnpj: string;

    @Column({length: 255})
    database: string;

    @Column({length: 100})
    typeDB: string;

    @Column({length: 100})
    km_delivery: string;
}