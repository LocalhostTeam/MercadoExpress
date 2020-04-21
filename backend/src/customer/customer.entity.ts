import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    name: string;

    @Column({length: 100})
    username: string;
    
    @Column({length: 100})
    email: string;
    
    @Column({length: 255})
    password: string;

    @Column({length: 255, nullable: true})
    profileImage: string;

    @Column({length: 11, nullable: true})
    phone: string;

    @Column({length: 11, nullable: true})
    alternativeContact: string;

    @Column("date")
    dateBirth: Date;
}