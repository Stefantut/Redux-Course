import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";
import comments from "./comments";

// in redux can exist only one reducer so will combine all other inside index

const rootReducer = combineReducers({
  posts,
  comments,
  router: routerReducer,
});

export default rootReducer;
