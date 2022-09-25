import { legacy_createStore as createStore, applyMiddleware} from "redux";
import ExpenseReducer from "../reducers/ExpenseReducer";

let Store = createStore(ExpenseReducer, applyMiddleware());

export default Store;
