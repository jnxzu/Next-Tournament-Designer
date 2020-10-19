import { combineReducers } from "redux";

import { tournamentName, tournamentType } from "./generalReducers";

import { GeneralTypes } from "../actions/actionTypes";

const appReducer = combineReducers({
  tournamentName,
  tournamentType,
});

const rootReducer = (state, action) => {
  const newState =
    action.type === GeneralTypes.UPLOAD_STATE ? action.data : state;

  return appReducer(newState, action);
};

export default rootReducer;
