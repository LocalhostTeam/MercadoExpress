import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UnitOfMeasure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:24, unique: true, nullable: false })
    name: string;
}