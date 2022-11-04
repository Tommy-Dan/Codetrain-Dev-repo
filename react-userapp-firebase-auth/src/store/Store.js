import { legacy_createStore as createStore, combineReducers} from "redux";
import UsersReducer from "../reducer/UsersReducer";



let Store = createStore(persistedReducer);



export { Store, persistor };