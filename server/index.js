import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app =express();

app.use(express.json());


import Categories from "./routes/Categories.js";
import connectDB from "./config/db.js";

app.use(cors({
  origin: ['http://localhost:5173', "https://swggi.vercel.app" ],
  methods: ['GET', 'POST' ],
  credentials: true
}));

// api Routes//

app.use("/api/categories", Categories);


connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
