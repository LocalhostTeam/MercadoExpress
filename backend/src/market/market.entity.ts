import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { TypeOfDatabase } from "src/type-of-database/type-of-database.entity";

@Entity()
export class Market {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, unique: true})
    name: string;

    @Column({length: 255})
    logo: string;

    @Column({length: 14, unique: true})
    cnpj: string;

    @Column({length: 70, unique: true})
    email: string;

    @Column({length: 255})
    password: string;

    @Column({length: 255})
    connectionStringDatabase: string;

    @Column({length: 20})
    userDatabase: string;

    @Column({length: 20})
    passwordDatabase: string;

    @ManyToOne(type => TypeOfDatabase)
    typeOfDatabase: TypeOfDatabase;

    @Column({length: 100})
    km_delivery: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}