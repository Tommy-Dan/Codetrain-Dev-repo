import { legacy_createStore as createStore, applyMiddleware } from "redux";
import usersReducer from "../reducers/usersReducer";
import thunk from "redux-thunk";

let Store = createStore(usersReducer, applyMiddleware(thunk));


export default Store;
