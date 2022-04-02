import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">InCompleteTodo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Completion</button>
              <button onClick={() => onClickDelete(index)}>Deletion</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
