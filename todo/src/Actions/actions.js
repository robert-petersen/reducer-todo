export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const toggleCompleted = (id) => {
  return( { type: TOGGLE_COMPLETED, payload: id } );
}

export const addNewTask = (obj) => {
  return( { type: ADD_NEW_TASK, payload: obj } );
}

export const clearCompleted = () => {
  return( { type: CLEAR_COMPLETED, payload: "CLEAR!" } );
}
