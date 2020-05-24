import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { State } from "src/state/state.entity";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: false, unique: true})
    name: string;

    // @Column({length: 2, nullable: false})
    // acronym: string;
    // // Passei os city e state controller que usei no meu trabalho, 
    // // mas começei errado lá, para otimizar use essa coluna, mas ai vai precisar mudar um pouco as controllers e services,
    // // então por enquando use dessa forma.

    @ManyToOne(type => State, state => state.acronym)
    state: State;
}