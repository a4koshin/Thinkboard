import express from "express";
import {
  getAllNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";
const router = express.Router();

router.get("/", getAllNote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
