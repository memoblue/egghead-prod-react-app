import React from 'react';

export const TodoForm = ({currentTodo, handleInputChange}) => (
  <form>
    <input
      type="text"
      value={currentTodo}
      onChange={handleInputChange}
    />
  </form>
);
