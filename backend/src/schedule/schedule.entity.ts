import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { TypeSchedule } from "src/type-schedule/type-schedule.entity";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timetz")
    openingTime: Date;

    @Column("timetz")
    closingTime: Date;

    @Column()
    typeScheduleId: number;

    @ManyToOne(type => TypeSchedule)
    @JoinColumn({ name: 'typeScheduleId' })
    typeSchedule: TypeSchedule;
}