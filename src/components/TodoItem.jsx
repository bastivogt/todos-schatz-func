import React from "react";

import store from "../store/storeObj";

export default function TodoItem({ todo, onDelete, onChangeDone }) {
  function generateID() {
    return `${todo.id}-${todo.title}`;
  }

  function getDone() {
    return store.todoStore.getTodoByID(todo.id).done;
  }

  function deleteTodoHandler() {
    console.log("TodoItem - deleteTodoHandler");
    if (window.confirm(`Willst du wirklich [Todo ID: ${todo.id}] löschen?`)) {
      store.todoStore.removeTodo(todo.id);
      if (typeof onDelete === "function") onDelete({ id: todo.id });
    }
  }

  function changeHandler(evt) {
    console.log("TodoItem - ChangeHandler", evt);
    store.todoStore.changeDone(todo.id, evt.target.checked);
    if (typeof onChangeDone === "function")
      onChangeDone({
        id: todo.id,
        done: evt.target.checked,
      });
  }
  return (
    <div className="todo-item">
      <li className="list-group-item d-flex align-items-center">
        <div className="w-100 d-flex align-items-center">
          <div>
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={todo.done}
              onChange={changeHandler}
              id={generateID()}
            />
          </div>
          <label
            className="form-check-label w-auto"
            htmlFor={generateID()}
            style={{
              textDecoration: getDone() ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.title}
          </label>
        </div>
        <div className="flex-shrink-1">
          <button
            className="btn btn-sm btn-close"
            onClick={deleteTodoHandler}
          ></button>
        </div>
      </li>
    </div>
  );
}
