import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/notes", noteRoutes);
app.use(express.static(path.join(__dirname, "../client/dist")));
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
  });
});
