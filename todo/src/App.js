import React, { useReducer } from "react";

import TodoList from "./Components/TodoList";
import Form from "./Components/Form";
import reducer, { initialState } from "./Reducers/reducer";
import { toggleCompleted, addNewTask, clearCompleted } from "./Actions/actions";

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleClear = () => {
    dispatch(clearCompleted());
  }

  return (
    <div className="App">
      <div>
        <h1>My Todo List:</h1>
        <TodoList 
          state={state} 
          dispatch={dispatch} 
          toggleCompleted={toggleCompleted} 
        />
        <button onClick={handleClear}>Clear Completed</button>
      </div>
      <Form 
        dispatch={dispatch} 
        addNewTask={addNewTask} 
      />
    </div>
  );
}

export default App;
