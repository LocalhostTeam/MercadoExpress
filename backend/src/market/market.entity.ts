import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { TypeOfDatabase } from "src/type-of-database/type-of-database.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";
import { Address } from "src/address/address.entity";
import { ProductMarket } from "src/product-market/product-market.entity";

@Entity()
export class Market {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, unique: true, nullable: false })
    name: string;

    @Column({ length: 255, nullable: false })
    logo: string;

    @Column({ length: 14, unique: true, nullable: false })
    cnpj: string;

    @Column({ length: 70, unique: true, nullable: false })
    email: string;

    @Column({ default: false })
    verifiedEmail: boolean;

    @Column({ length: 255, nullable: false })
    password: string;

    @Column({ length: 11, nullable: false })
    phone: string;

    @Column({ default: false })
    verifiedPhone: boolean;

    @Column({ length: 20, nullable: false })
    bank: string;

    @Column({ length: 4, nullable: false })
    codBank: string;

    @Column({ length: 5, nullable: false })
    agency: string;

    @Column({ length: 11, nullable: false })
    account: string;

    @Column({ nullable: false })
    verifyingDigit: number;

    @Column({ length: 255, nullable: false })
    connectionStringDatabase: string;

    @Column({ length: 20, nullable: false })
    userDatabase: string;

    @Column({ length: 20, nullable: false })
    passwordDatabase: string;

    @Column({ type: 'real', default: 0.00 })
    maximumWithdrawTime: number;

    @Column({ default: 0 })
    maximumWithdraw: number;

    @Column({ type: 'timetz', default: '00:00' })
    maximumDeliveryTime: number;

    @Column({ default: 0 })
    maximumDelivery: number;

    @Column({ type: 'real', nullable: false })
    km_delivery: number;

    @Column({ type: 'real', default: 0.00 })
    deliveryPricePerKm: number;

    @Column({ type: 'timetz', default: '00:00' })
    minimumDeliveryPrice: number;

    @Column({ type: 'real', default: 0.00 })
    maximumDeliveryPrice: number;

    @Column({ nullable: false })
    typeOfDatabaseId: number;

    @ManyToOne(type => TypeOfDatabase)
    @JoinColumn({ name: 'typeOfDatabaseId' })
    typeOfDatabase: TypeOfDatabase;

    @OneToMany(type => ProductMarket, productMarket => productMarket.marketId)
    public productMarkets!: ProductMarket[];

    @OneToMany(type => Address, address => address.marketId)
    addresses: Address[];

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}