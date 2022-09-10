import { legacy_createStore, applyMiddleware } from "redux";
import UsersReducer from "../reducer/UsersReducer";
import thunk from "redux-thunk";

let Store = legacy_createStore(UsersReducer, applyMiddleware(thunk));


export default Store;
