import mongoose from "mongoose";
import { HttpException } from "../../types/HttpExeceptions";

export async function connect() {
    try {
        if(!process.env.DATABASE_URL){
            throw new Error("DATABASE_URL is not set");
        }
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to database");
    } catch (error: any) {
        throw new HttpException(500,error.message); 
    }
}