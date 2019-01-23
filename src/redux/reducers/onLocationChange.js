import { ADD, GET, REMOVE, EDIT } from "../actions/locationActions";
import { db, localDb } from "../../db/db";

const OnLocationChange = (state = null, { type, payload }) => {
  switch (type) {
    case GET:
      return localDb.locations;
    case ADD:
      const { name, address, category, lat, lon } = { ...payload };
      if (localDb.locations.indexOf(name) == -1) {
        db.open()
          .then(() => {
            return db.locations.add({ name, address, category, lat, lon });
          })
          .catch(e => {
            console.log("error", e);
          });
        localDb.locations.push(payload);
      }
      return localDb.locations.concat();    
    default:
      return state;
  }
};

export default OnLocationChange;
