import { legacy_createStore as createStore } from "redux";
import expenseReducer from "../reducers/Reducer";


let Store = createStore(expenseReducer)

export default Store;