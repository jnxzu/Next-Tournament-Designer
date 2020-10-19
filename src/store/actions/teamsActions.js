import { TeamsTypes } from './actionTypes';

export const setNumberOfTeams = (number) => ({
  type: TeamsTypes.SET_NUMBER_OF_TEAMS,
  number,
});

export const setTeams = (list) => ({});
