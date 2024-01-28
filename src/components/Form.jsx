import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/todos/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      const updateTodo = {
        id: edit.todo.id,
        text: text,
      };
      dispatch(update(updateTodo));
    } else {
      const addTodo = {
        id: crypto.randomUUID(),
        text: text,
      };
      dispatch(add(addTodo));
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);
  return (
    <form
      className='my-2'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='form-control rounded-0 my-2'
        value={text}
        placeholder='Enter Text Here'
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-success w-100 rounded-0 '>Save </button>
    </form>
  );
};

export default Form;
