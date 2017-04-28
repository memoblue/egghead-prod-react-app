import React from 'react';

export const TodoListItem = (props) => (
  <li>
    <input defaultChecked={props.checked} type="checkbox" />
    {props.name}
  </li>
);
