import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../component/NoteInput";
import { addNote } from "../utils/api";

function AddNotePage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah Catatan Baru</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNotePage;
