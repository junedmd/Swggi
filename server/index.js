import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app =express();

app.use(express.json());

const PORT =5000;
import Categories from "./routes/Categories.js";
import connectDB from "./config/db.js";

app.use(cors({
  origin: ['http://localhost:5173', "https://swggi.vercel.app" ],
  methods: ['GET', 'POST' ,'DELETE'],
  credentials: true
}));

// api Routes//

app.use("/api/categories", Categories);


connectDB()

app.listen(PORT,()=>{
        console.log("server is running on the server")
})
