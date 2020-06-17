import { Entity, PrimaryColumn, ManyToOne, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Brand } from 'src/brand/brand.entity';
import { Market } from 'src/market/market.entity';
import { UnitOfMeasure } from 'src/unit-of-measurement/unit-of-measure.entity';
import { Pack } from 'src/pack/pack.entity';

@Entity()
export class ProductBrand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150, nullable: false, unique: true })
    fullName: string;

    @Column({ length: 50, nullable: false, unique: true })
    shortName: string;

    @Column({ length: 255, nullable: true })
    description: string;

    @Column({ length: 255, unique: true })
    public image!: string;

    @Column({ type: 'real', nullable: false})
    amount: number;

    @Column({ type: 'integer', nullable: false })
    brandId!: number;

    @ManyToOne( type => Brand, brand => brand.productBrands )
    @JoinColumn({ name: 'brandId' })
    public brand!: Brand;

    @Column({ type: 'integer', nullable: false })
    productId!: number;

    @ManyToOne( type => Product, product => product.productBrands )
    @JoinColumn({ name: 'productId' })
    public product!: Product;

    @Column({ type: 'integer', nullable: false })
    packId!: number;

    @ManyToOne( type => Pack, pack => pack.id )
    @JoinColumn({ name: 'packId' })
    public pack!: Pack;

    @Column({ type: 'integer', nullable: false })
    unitOfMeasureId!: number;

    @ManyToOne( type => UnitOfMeasure, unitOfMeasure => unitOfMeasure.id )
    @JoinColumn({ name: 'unitOfMeasureId' })
    public unitOfMeasure!: UnitOfMeasure;

    @OneToMany( type => Market, market => market.id )
    public markets!: Market[];
}