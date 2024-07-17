import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://didindinesh5:DIDIN55555@cluster0.7piwseq.mongodb.net/tapzfood").then(() => console.log("db connected"));
}