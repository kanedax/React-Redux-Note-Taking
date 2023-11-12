import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "./actionTypes";

export const addNoteAction = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export const fetchNotesAction = () => {
  return {
    type: FETCH_NOTES,
  };
};
