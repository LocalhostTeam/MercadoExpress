import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TypeSchedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30, nullable: false })
    name: string;

    @Column({ length: 255, nullable: true })
    obs: string;
}