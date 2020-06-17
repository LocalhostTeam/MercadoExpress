import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { TypeSchedule } from "src/type-schedule/type-schedule.entity";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timetz', nullable: false })
    openingTime: Date;

    @Column({ type: 'timetz', nullable: false })
    closingTime: Date;

    @Column({ nullable: false })
    typeScheduleId: number;

    @ManyToOne(type => TypeSchedule)
    @JoinColumn({ name: 'typeScheduleId' })
    typeSchedule: TypeSchedule;
}