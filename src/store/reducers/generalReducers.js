import { GeneralTypes, TournamentTypeTypes } from "../actions/actionTypes";
import { TournamentTypeValues } from "../actions/actionValues";

export const tournamentName = (state = "", action) => {
  switch (action.type) {
    case GeneralTypes.SET_TOURNAMENT_NAME:
      return action.name;
    default:
      return state;
  }
};

export const tournamentType = (state = "", action) => {
  switch (action.type) {
    case TournamentTypeTypes.CUP:
      return TournamentTypeValues.CUP;
    case TournamentTypeTypes.LEAGUE:
      return TournamentTypeTypes.LEAGUE;
    default:
      return state;
  }
};
