import { ADD } from "../actions/categoryActions";
import db from "../../db/db";
const OnCategoryChange = (state = null, { type, name }) => {
  switch (type) {
    case ADD:
      db.open()
        .then(() => {          
          return db.categories.add({name});
        })
      return name;
    default:
      return state;
  }
};
export default OnCategoryChange;
