import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Kiruba:888333ajk@cluster0.wfy4zrd.mongodb.net/food-del').then(()=>console.log("DB Connect"))
}