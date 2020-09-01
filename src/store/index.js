import { createStore, combineReducers } from "redux";
import profileReducer from './../redux/profileReducer';
import dialogsReducer from './../redux/dialogsReducer';
import usersReducer from './../redux/usersReducer';
import appReducer from './../redux/appReducer';

const reducers = combineReducers({
    profileReducer,//small state
    dialogsReducer,//small state
    usersReducer,
    appReducer
  });//return BIG STATE
  
export  default createStore(reducers);//store