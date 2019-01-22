const db = new window.Dexie("my_locations_database");
db.version(1).stores({
  categories: "name",
  locations: "name,addres,coordinates,category"
});

export default db;
