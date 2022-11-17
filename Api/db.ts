import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config()

export async function connectDB(){
    console.log('conect db')
    await mongoose.connect(`${process.env.MONGO_URL}`);
}