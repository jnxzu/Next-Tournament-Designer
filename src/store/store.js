import { createStore } from "redux";

import combined from "./reducers/combinedReducers";

export const store = createStore(combined);
