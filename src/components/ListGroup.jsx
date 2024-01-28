import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListGroup = () => {
  const {allTodos}=useSelector((state)=>state.todos)
  return (
    <ul className='list-group my-2'>
      {
        allTodos.map((todo)=><ListItem key={todo.id} todo={todo}/>)
      }
    </ul>
  );
};

export default ListGroup;
