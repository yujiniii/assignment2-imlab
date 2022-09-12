import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn('increment')
    coupon_id: number

    @Column()
    coupon_code: string

    @Column()
    is_used: boolean

    @Column()
    type: string

    @Column()
    scope: string

}