import { GeneralTypes } from './actionTypes';

export const uploadState = (data) => ({
  type: GeneralTypes.UPLOAD_STATE,
  data,
});

export const setTournamentName = (name) => ({
  type: GeneralTypes.SET_TOURNAMENT_NAME,
  name,
});

export const setTournamentType = (tournamentType) => ({
  type: GeneralTypes.SET_TOURNAMENT_TYPE,
  tournamentType,
});
