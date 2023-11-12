import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "../Actions/actionTypes";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      //add note to storage
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return {
        notes: [...state.notes, newNote],
      };
    case FETCH_NOTES:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return {
        ...state,
        notes: filteredNotes,
      };
    default:
      return state;
  }
};

export default noteReducer;
