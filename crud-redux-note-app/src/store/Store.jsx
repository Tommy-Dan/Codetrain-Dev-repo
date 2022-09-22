import { legacy_createStore as createStore } from "redux";
// import thunk from "redux-thunk";
import NoteReducer from "../reducers/NoteReducers";

let Store = createStore(NoteReducer)

export default Store;