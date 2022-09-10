import { createStore } from "react";
import contactReducer from "../reducers/contactReducer";


let store = createStore(contactReducer);

export default store;