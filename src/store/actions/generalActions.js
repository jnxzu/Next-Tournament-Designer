import { GeneralTypes } from "./actionTypes";
import {} from "./actionValues";

export const uploadState = (data) => ({
  type: GeneralTypes.UPLOAD_STATE,
  data,
});

export const setTournamentName = (name) => ({
  type: GeneralTypes.SET_TOURNAMENT_NAME,
  name,
});
