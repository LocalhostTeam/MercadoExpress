import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { Address } from "src/address/address.entity";
import { SaleProducts } from "src/sale-products/sale-products.entity";

@Entity()
export class Sell {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'real', nullable: false })
    totalValue: number;

    @Column({ length: 255, nullable: true })
    addresseeSignature: string;

    @Column({ length: 11, nullable: false })
    addresseeCPF: string;
    
    @Column({ nullable: false })
    customerId: number;

    @ManyToOne(type=> Customer)
    @JoinColumn({ name: 'customerId' })
    customer: Customer; 

    @Column({ nullable: false })
    addressId: number;

    @ManyToOne(type=> Address)
    @JoinColumn({ name: 'addressId' })
    address: Address;

    @OneToMany(type => SaleProducts, saleProducts => saleProducts.sellId)
    public saleProductss!: SaleProducts[];

    @CreateDateColumn()
    createdDate: Date;
}