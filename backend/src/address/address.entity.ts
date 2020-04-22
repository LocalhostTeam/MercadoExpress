import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityId: number;

    @Column({length: 100})
    district: string;

    @Column({length: 100})
    street: string;

    @Column()
    // tslint:disable-next-line:variable-name
    number: number;

    @Column({length: 8})
    cep: string;

    @Column({length: 12, nullable: true})
    lat: string;

    @Column({length: 12, nullable: true})
    log: string;

    @Column({nullable: true})
    customerOwnerId: number;

    @Column({nullable: true})
    marketOwnerId: number;

    @Column({length: 255, nullable: true})
    obs: string;

    @Column({default: true})
    mainAddress: boolean; 
}