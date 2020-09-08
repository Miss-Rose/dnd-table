import {combineReducers} from "redux";
import dragReducer from "./dragReducer";
import tableReducer from "./tableReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    dragReducer,
    tableReducer,
    searchReducer
});
