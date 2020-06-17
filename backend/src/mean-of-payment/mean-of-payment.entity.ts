import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MeanOfPayment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30, nullable: false })
    name: string;

    @Column({ length: 255, nullable: true })
    obs: string;
}