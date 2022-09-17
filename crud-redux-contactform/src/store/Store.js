
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ContactReducer from "../reducer/ContactReducer";
// import thunk from "redux-thunk";

let Store = createStore(ContactReducer, applyMiddleware());


export default Store;
