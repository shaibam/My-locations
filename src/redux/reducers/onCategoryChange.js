import { ADD, GET, REMOVE, EDIT } from "../actions/categoryActions";
import { db, localDb } from "../../db/db";
const OnCategoryChange = (state = null, { type, name, newName }) => {
  switch (type) {
    case GET:
      return localDb.categories;
    case ADD:
      if (localDb.categories.indexOf(name) == -1) {
        db.open()
          .then(() => {
            return db.categories.add({ name });
          })
          .catch(e => {
            console.log("error", e);
          });
        localDb.categories.push(name);
      }
      return localDb.categories.concat();
    case REMOVE:
      var i = localDb.categories.indexOf(name);
            
      if (i != -1) {
        db.open()
          .then(() => {            
            return db.categories
              .where("name")
              .equals(name)
              .delete();
          })
          .catch(e => {
            console.log("error", e);
          });
        localDb.categories.splice(i, 1);
      }      
      return localDb.categories.concat();
    case EDIT:
      console.log(localDb);
      var i = localDb.categories.indexOf(name);
      if (i != -1) {
        db.open()
          .then(() => {
            return db.categories
              .where("name")
              .equals(name)
              .modify(entry => {
                entry.name = newName;
              });
            //return db.categories.put({ name: newName }, { name });
          })
          .catch(e => {
            console.log("error", e);
          });
        localDb.categories[i] = newName;
      }
      return localDb.categories.concat();
    default:
      return state;
  }
};
export default OnCategoryChange;
