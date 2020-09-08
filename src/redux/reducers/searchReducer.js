import {SEARCH_PROP} from "../actionTypes/actionTypes";

const initState = {
    search: ''
};

const searchReducer = (state = initState, action) => {
    if (action.type === SEARCH_PROP) {
        return { search: action.payload};
    }
    return state;
};

export default searchReducer;