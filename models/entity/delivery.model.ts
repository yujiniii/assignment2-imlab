import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Delivery {
    @PrimaryGeneratedColumn('increment')
    delivery_id: number

    @Column()
    delivery_price: number

    @Column()
    delivery_state: string

}