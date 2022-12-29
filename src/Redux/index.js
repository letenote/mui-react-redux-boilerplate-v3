import { createStore, applyMiddleware, compose } from "redux";
import { accessCheck, refreshingIdleTime } from "./middleware";
import thunk from "redux-thunk";
import AllReducer from './reducers';

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore() {
  const combineMiddleware = [accessCheck, thunk, refreshingIdleTime];
  const store = createStore(
    AllReducer,
    process.env.NODE_ENV === "development"
      ? composeEnhanchers(applyMiddleware(...combineMiddleware))
      : compose(applyMiddleware(...combineMiddleware))
  );

  return store;
}