import {GlobalState} from "./reducer";

export const loadState = () => {
  try {
      const state = localStorage.getItem('state');
      if (state === null){
          return undefined;
      }
      return JSON.parse(state);
  } catch (e) {
      return undefined
  }
};

export const saveState = (state: GlobalState) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (e) {
      //Ignore for now
  }
};