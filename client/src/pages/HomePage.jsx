import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import axiosInstance from "../lib/axios";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const getNoteFromDB = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/notes");
      setNotes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch error Occured");
    }
  };
  useEffect(() => {
    getNoteFromDB();
  }, []);

  return (
    <div className="min-h-screen mt-6">
      <Navbar />
      {isLoading && (
        <div className="text-center text-accent py-20"> Loading notes....</div>
      )}
      {notes.length === 0 && (
        <div className="mt-40">
          <h1 className="text-center text-accent font-bold font-mono text-2xl">
            No note found! please Create new note
          </h1>
        </div>
      )}

      {notes.length > 0 && (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNote={setNotes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
