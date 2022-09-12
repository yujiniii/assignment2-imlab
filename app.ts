import 'dotenv/config'
import  express, { Request, Response, NextFunction }  from "express";
import { AppDataSource } from "./models/data-source"
import { Country } from './models/entity/country.model';

const app:express.Application = express();

AppDataSource.initialize().then(async () => {
    console.log("initialize")
    const cou1 = new Country();
    cou1.country_code = "KR";
    cou1.country_name = "South Korea"
    await AppDataSource.manager.save(cou1)
    const couns = await AppDataSource.manager.find(Country)
    console.log("Loaded users: ", couns)
}).catch(error => console.log(error))



// app.use('/order', require('./components/order/orderRoute'));	
// app.use('/delivery', require('./components/delivery/deliveryRoute'));	
// app.use('/coupon', require('./components/coupon/couponRoute'));	
// app.use('/user', require('./components/user/userRoute'));	

app.listen(process.env.PORT, ()=>{
    console.log("server on....")
})



