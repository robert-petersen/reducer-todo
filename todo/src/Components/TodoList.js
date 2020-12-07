import React from "react";

import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { state, dispatch, toggleCompleted } = props;
  
  return(
    <div>
      {
        state.map((todo)=>{
          console.log("todo: ", todo)
          return(
            <TodoCard todo={todo} key={todo.id} id={todo.id} dispatch={dispatch} toggleCompleted={toggleCompleted} />
          );
        })
      }
    </div>
  );
}
