import express from "express";
const app =express();

app.use(express.json());

const PORT =5000;
import Categories from "./routes/Categories.js";
import connectDB from "./config/db.js";

app.use("/api/categories", Categories);

connectDB()

app.listen(PORT,()=>{
        console.log("server is running on the server")
})
