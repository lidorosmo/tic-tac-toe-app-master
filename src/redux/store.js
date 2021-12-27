import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";

export default configureStore({
  reducer: {
    counter: countReducer,
    //if there will be more reducers they will be inserted here with commas seperating them.
  },
});

// export default createStore(countReducer);
