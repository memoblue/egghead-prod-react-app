import React from 'react';

const TodoListItem = (props) => (
  <li>
    <input defaultChecked={props.checked} type="checkbox" />
    {props.name}
  </li>
);

export default TodoListItem;
