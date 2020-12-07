import React from "react";
import Styled from "styled-components";

export default function TodoCard(props) {
  const { todo, id, dispatch, toggleCompleted } = props;
  
  const handleClick = () => {
    dispatch(toggleCompleted(id));
  }
  
  return(
    <StyledTodoCard>
      <h3 
        className={`${todo.completed ? "marked" : ""}`}
        onClick={handleClick}
      >{todo.task}</h3>
    </StyledTodoCard>
  );
}

const StyledTodoCard = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .checkbox{
    max-width:30px;
    max-height: 30px;
    background-color: lightgrey;
  }
  h3{
    margin-left: 10px;
  }
  .marked{
    text-decoration: line-through;
  }
`;