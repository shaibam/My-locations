import { combineReducers } from "redux";
import OnCategoryChange from "./onCategoryChange.js";
import OnLocationChange from "./onLocationChange.js";
export default combineReducers({
  categories: OnCategoryChange,
  locations:OnLocationChange
});
