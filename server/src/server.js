import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

app.use("/api/notes", noteRoutes);
app.use(cors());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
  });
});
