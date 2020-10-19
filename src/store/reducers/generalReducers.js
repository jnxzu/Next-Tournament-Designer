import { GeneralTypes } from '../actions/actionTypes';

export const tournamentName = (state = '', action) => {
  switch (action.type) {
    case GeneralTypes.SET_TOURNAMENT_NAME:
      return action.name;
    default:
      return state;
  }
};

export const tournamentType = (state = '', action) => {
  switch (action.type) {
    case GeneralTypes.SET_TOURNAMENT_TYPE:
      return action.tournamentType;
    default:
      return state;
  }
};
