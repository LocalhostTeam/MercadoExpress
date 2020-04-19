import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MeanOfPayment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    type: string;
}