import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/routes.js"
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();


mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log(`Connected to MongoDB`)
})
.catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())


const PORT =5000;

app.listen(PORT,()=>{
    console.log(`Server is runnig on port ${PORT}`)
})


app.use("/api/user",userRoutes);


app.use((err, req, res, next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message||"Internal Server Error!";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
