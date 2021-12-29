// import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./countReducer";
import { createStore } from "redux";
import reducer from "./reducer";

// export default configureStore({
//   reducer: {
//     // counter: countReducer,
//     //if there will be more reducers they will be inserted here with commas seperating them.
//   },
// });

const store = createStore(reducer);

export default store;
