import { configureStore, applyMiddleware } from "redux";
import UsersReducer from "../reducer/UsersReducer";
import thunk from "redux-thunk";

let Store = configureStore(UsersReducer, applyMiddleware(thunk));


export default Store;
