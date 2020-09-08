import {DRAG_END_FULFILLED, GET_DATA_FULFILLED} from "../actionTypes/actionTypes";

const initialState = {
    properties: {},
    columns: {},
    columnOrder: [],
    id: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_FULFILLED:
            return {
                properties: action.payload[0].properties,
                columns: action.payload[0].columns,
                columnOrder: action.payload[0].columnOrder,
                id: action.payload[0].id
            };
        case DRAG_END_FULFILLED:
            return action.payload;
        default:
            return state;
    }
};