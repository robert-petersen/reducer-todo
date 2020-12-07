import React, { useState } from "react";

export default function Form(props) {
  const { dispatch, addNewTask } = props;
  const [ formData, setFormData ] = useState({ 
    id: 0, 
    task: "", 
    completed: false 
  });

  const onChange = (evt) => {
    setFormData({
      ...formData,
      task: evt.target.value
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newTask = {
      ...formData,
      id: Date.now()
    }
    dispatch(addNewTask(newTask));
    setFormData({ 
      id: 0, 
      task: "", 
      completed: false 
    })
  }

  return(
    <form onSubmit={onSubmit}>
      <label>New Task: 
        <input 
          type="text"
          name="task"
          value={formData.task}
          onChange={onChange}
        />
      </label>
      <button>Add</button>
    </form>
  );
}