import { TOGGLE_COMPLETED, ADD_NEW_TASK, CLEAR_COMPLETED } from "./../Actions/actions";

export const initialState = [
  {
    id: 1,
    task: "Make Todo App",
    completed: false
  },
  {
    id: 2,
    task: "Make Add Task Functionality",
    completed: false
  }
]

const reducer = (state, action) => {
  switch(action.type) {
    case TOGGLE_COMPLETED :
      return (
        state.map((todo)=> {
          console.log("todo.id: ", todo.id, "action.payload: ", action.payload);
          if(todo.id === action.payload){
            return { ...todo, completed: !todo.completed }
          };
          return todo;
        })
      );
    case ADD_NEW_TASK :
      return [ ...state, action.payload ];
    case CLEAR_COMPLETED :
      return state.filter(todo => todo.completed === false);
    default :
      return state;
  }
}

export default reducer;