import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  if (!notes.length) {
    return <p>No notes found</p>;
  }
  return (
    <>
      {notes.length !== 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      ) : (
        <div className="note-list__empty-message">Belum ada catatan</div>
      )}
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
