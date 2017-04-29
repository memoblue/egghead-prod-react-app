import React from 'react';

export const TodoForm = ({currentTodo, handleInputChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={currentTodo}
      onChange={handleInputChange}
    />
  </form>
);
