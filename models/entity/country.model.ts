import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Country {
    @PrimaryGeneratedColumn('increment')
    country_id: number

    @Column()
    country_code: string

    @Column()
    country_name: string

}