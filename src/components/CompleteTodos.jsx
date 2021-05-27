import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="area complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
