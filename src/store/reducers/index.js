import {combineReducers} from "redux";
import products from "./productsReducer";
import flows from "./flowReducer";
import user from "./userReducer";
export default combineReducers({products,flows,user});