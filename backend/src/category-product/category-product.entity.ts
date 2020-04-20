import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CategoryProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 255, nullable: true })
    obs: string;
}