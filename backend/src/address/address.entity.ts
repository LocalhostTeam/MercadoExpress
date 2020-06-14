import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Market } from "src/market/market.entity";
import { Customer } from "src/customer/customer.entity";
import { City } from "src/city/city.entity";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    district: string;

    @Column({length: 100})
    street: string;

    @Column()
    // tslint:disable-next-line:variable-name
    number: number;

    @Column()
    cep: string;

    @Column({length: 12, nullable: true})
    lat: string;

    @Column({length: 12, nullable: true})
    log: string;

    @Column({length: 255, nullable: true})
    obs: string;

    @Column({default: false})
    mainAddress: boolean;

    @Column()
    cityId: number;

    @ManyToOne(type => City)
    @JoinColumn({ name: 'cityId' })
    city: City;

    @Column({nullable: true})
    customerId: number;

    @ManyToOne(type => Customer)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @Column({nullable: true})
    marketId: number;

    @ManyToOne(type => Market)
    @JoinColumn({ name: 'marketId' })
    market: Market;
}