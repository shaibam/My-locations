export const db = new window.Dexie("my_locations_database");
export var localDb = {};
export class DbInit {
  isReady = false;

  constructor() {
    db.version(1).stores({
      categories: "name",
      locations: "name,addres,coordinates,category"
    });

    db.open().then(() => {
      db.categories
        .toArray()
        .then(value => {
          localDb.categories = value.map((e, i) => {
            return e.name;
          });
        })
        .then(() => {
          db.locations.toArray().then(value => {
            localDb.locations = value;            
            this.isReady = true;
            if (this.callback) this.callback();
          });
        });
    });
  }

  onReady = callback => {
    this.callback = callback;
    if (this.isReady) this.callback();
  };
}
