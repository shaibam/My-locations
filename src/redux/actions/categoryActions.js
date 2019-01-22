export const ADD = 'category:add';
export const REMOVE = 'category:remove';
export const EDIT = 'category:edit';

export const Add = (name) => {
    console.log('Add action');
    return {
        type: ADD,
        name
    }
}