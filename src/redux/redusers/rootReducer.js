import { combineReducers } from "redux";
import { authReducer as auth } from "./authReducer";
import { recipeReducer as recipes } from "./recipeReducer";

export const rootReducer = combineReducers({ auth, recipes })