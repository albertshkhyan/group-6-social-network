import { createStore, combineReducers } from "redux";
import profileReducer from './../redux/profileReducer';
import dialogsReducer from './../redux/dialogsReducer';

const reducers = combineReducers({
    profileReducer,//small state
    dialogsReducer//small state
  });//return BIG STATE
  
export  default createStore(reducers);//store