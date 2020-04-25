import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TypeSchedule } from "src/type-schedule/type-schedule.entity";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TypeSchedule)
    typeSchedule: TypeSchedule;

    @Column("timetz")
    openingTime: Date;

    @Column("timetz")
    closingTime: Date;
}