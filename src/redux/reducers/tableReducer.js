import {
    GET_TABLE_PENDING,
    GET_TABLE_FULFILLED,
    GET_TABLE_REJECTED
} from '../actionTypes/actionTypes';

const initialState = {
    table: [],
    loading: false,
    error: false
};


export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_TABLE_PENDING: return {...state, loading: true};
        case GET_TABLE_FULFILLED:
            return {...state, loading: false, table: payload};
        case GET_TABLE_REJECTED: return {...state, loading: false, error: true};
        default:
            return state;
    }
}