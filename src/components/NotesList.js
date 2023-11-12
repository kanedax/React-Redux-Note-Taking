import React, { useEffect } from "react";
import "./NotesList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNoteAction,
  fetchNotesAction,
} from "../Redux/Actions/notesActions";

const NotesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, []);
  const notes = useSelector((storeData) => {
    return storeData.notes;
  });
  console.log(notes);
  return (
    <>
      <h1>Notes List</h1>

      {notes.map((i) => (
        <div key={i.id} className="item-container">
          <div className="item-content">
            <h2>{i.title}</h2>
            <p>{i.content}</p>
            <button onClick={() => dispatch(deleteNoteAction(i.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesList;
