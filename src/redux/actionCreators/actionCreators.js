import {GET_DATA, DRAG_END, GET_TABLE, SEARCH_PROP} from "../actionTypes/actionTypes";
import {get, post} from "../../api/Api";

const url = 'http://localhost:3001/data';
export const getDataActionCreator = () => {
   return {type: GET_DATA, payload: get(`${url}`)}
};

export const changeInList = (data) => ({type: DRAG_END , payload: post(url, data)});


const url2 = 'http://localhost:3002/table';
export const getTableActionCreator = () => ({
   type: GET_TABLE, payload: get(`${url2}`)
});

export const searchProp = (data) => ({type: SEARCH_PROP, payload: data});
