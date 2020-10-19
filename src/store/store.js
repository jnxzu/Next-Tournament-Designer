import { createStore } from "redux";

import rootReducer from "./reducers/combinedReducers";

export const store = createStore(rootReducer);
