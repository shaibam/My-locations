export const GET = "locations:get";
export const ADD = "locations:add";
export const REMOVE = "locations:remove";
export const EDIT = "locations:edit";

export const Get = () => {
  return {
    type: GET
  };
};

export const Add = ({name, category, address, lat, lon}) => {    
  return {
    type: ADD,
    payload: {
      name,
      category,
      address,
      lat,
      lon
    }
  };
};

export const Remove = name => {
  return {
    type: REMOVE,
    payload: { name }
  };
};

export const Edit = (name, newName, newCategory) => {
  return {
    type: EDIT,
    payload: {
      name,
      newName
    }
  };
};
