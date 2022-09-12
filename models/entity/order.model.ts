import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm"
import {Country} from "./country.model"
import { Delivery } from "./delivery.model"


@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    order_id: number

    @Column()
    order_date: Date

    @Column()
    pay_state: string

    @Column()
    quantity: number

    @Column()
    order_price: number

    
    @OneToOne(() => Delivery)
    @JoinColumn()
    delivery_id : Delivery;


    @OneToOne(() => Country)
    @JoinColumn()
    country_id: Country;
}