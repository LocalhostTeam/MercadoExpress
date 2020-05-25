import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Address } from 'src/address/address.entity';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    name: string;

    @Column({length: 30, nullable: true})
    username: string;

    @Column({length: 255, nullable: true})
    profileImage: string;
    
    @Column({length: 70, unique: true, nullable: false})
    email: string;
    
    @Column({default: false})
    verifiedEmail: boolean;

    @Column({length: 255})
    password: string;

    @Column({length: 11})
    phone: string;

    @Column({default: false})
    verifiedPhone: boolean;

    @Column({length: 11, nullable: true})
    alternativeContact: string;

    @Column('date')
    dateBirth: Date;

    @Column({default: true})
    notification: boolean;

    @OneToMany(type => Address, address => address.customerOwnerId)
    addresses: Address[];
}