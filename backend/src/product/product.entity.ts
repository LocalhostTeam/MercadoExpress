import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProductMarket {
    @PrimaryColumn()
    product_id: number;

    @PrimaryColumn()
    market_id: number;
}