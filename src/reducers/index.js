import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer, // key of this object will be the key in the app's state
  users: usersReducer
});
