import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DATEBASE_USERNAME,
    password: process.env.DATEBASE_PASSWORD,
    database:  process.env.DATEBASE,
    synchronize: true,
    logging: true,
    entities: [
        "models/entity/delivery.model.{js,ts}",
        "models/entity/coupon.model.{js,ts}",
        "models/entity/country.model.{js,ts}",
        "models/entity/order.model.{js,ts}"   
    ],
    subscribers: [],
    migrations: [],
})