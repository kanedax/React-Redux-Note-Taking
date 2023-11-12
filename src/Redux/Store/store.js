import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import noteReducer from "../Reducer/notesReducer";

const store = createStore(noteReducer, composeWithDevTools());

export default store;
