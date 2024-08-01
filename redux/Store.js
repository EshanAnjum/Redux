import { createStore } from "redux";
import { CounterReducer } from "./redux";

export const MyStore = createStore(CounterReducer);