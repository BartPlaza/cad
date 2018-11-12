import {createStore} from "redux";
import rootReducer from "./reducer";
import {devToolsEnhancer} from "redux-devtools-extension";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, devToolsEnhancer());
store.subscribe(() => {
   saveState(store.getState())
});

export default store;