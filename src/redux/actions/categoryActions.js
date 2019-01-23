export const GET = 'category:get';
export const ADD = 'category:add';
export const REMOVE = 'category:remove';
export const EDIT = 'category:edit';

export const Get = () => {
    return {
        type: GET
    }
}
export const Add = (name) => {
    return {
        type: ADD,
        name
    }
}

export const Remove = (name) => {        
    return {
        type: REMOVE,
        name
    }
}

export const Edit = (name,newName) => {        
    return {
        type: EDIT,
        name,
        newName
    }
}