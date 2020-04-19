import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MeansOfPayment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    type: string;
}