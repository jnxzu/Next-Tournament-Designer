import { TeamsTypes } from '../actions/actionTypes';

export const numberOfTeams = (state = 0, action) => {
  switch (action.type) {
    case TeamsTypes.SET_NUMBER_OF_TEAMS:
      return action.number;
    default:
      return state;
  }
};

export const teams = (state = [], action) => {};
