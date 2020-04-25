import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { TypeOfDatabase } from "src/type-of-database/type-of-database.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";
import { Address } from "src/address/address.entity";

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

    @Column({default: false})
    verifiedEmail: boolean;

    @Column({length: 255})
    password: string;

    @Column({length: 11})
    phone: string;

    @Column({default: false})
    verifiedPhone: boolean

    @Column("timetz")
    openingTime: Date;

    @Column("timetz")
    closingTime: Date;

    @Column({length: 20})
    bank: string;

    @Column({length: 4})
    codBank: string;

    @Column({length: 5})
    agency: string;

    @Column({length: 11})
    account: string;

    @Column()
    verifyingDigit: number;

    @Column({length: 255})
    connectionStringDatabase: string;

    @Column({length: 20})
    userDatabase: string;

    @Column({length: 20})
    passwordDatabase: string;

    @ManyToOne(type => TypeOfDatabase)
    typeOfDatabase: TypeOfDatabase;

    @OneToMany(() => ProductBrand, productBrand => [
        { name: "brandId", referencedColumnName: "brand" },
        { name: "productId", referencedColumnName: "product" }
    ])
    public productBrand!: ProductBrand;

    @OneToMany(type => Address, address => address.customerOwnerId)
    addresses: Address[];

    @Column({type: 'real', default: null})
    maximumWithdrawTime: number;

    @Column({type: 'real', default: null})
    maximumDeliveryTime: number;

    @Column({length: 100})
    km_delivery: string;

    @Column({type: 'real', default: null})
    deliveryPricePerKm: number;

    @Column({type: 'real', default: null})
    maximumDeliveryPrice: number;

    @Column({type: 'real', default: null})
    minimumDeliveryPrice: number;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}