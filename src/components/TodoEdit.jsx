import React, { useState } from "react";

import store from "../store/storeObj";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function TodoEdit({
  id,
  placeholder = "Todo",
  label = "Speichern",
}) {
  const todo = store.todoStore.getTodoByID(id);

  const [inputText, setInputText] = useState(todo.title);

  const navigate = useNavigate();

  function inputChangeHandler(evt) {
    setInputText(evt.target.value);
  }

  function inputKeyUpHandler(evt) {
    if (evt.key === "Enter") {
      editHandler();
    }
  }

  function editHandler() {
    if (inputText !== "" && inputText !== todo.title) {
      if (window.confirm(`Willst du wirklich [Todo ID: ${todo.id}] ändern?`)) {
        store.todoStore.edit(id, inputText);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <Card header={`Todo bearbeiten [id: ${id}]`}>
        <div className="input-group">
          <input
            type="text"
            placeholder={placeholder}
            className="form-control"
            value={inputText}
            onChange={inputChangeHandler}
            onKeyUp={inputKeyUpHandler}
          />
          <button className="btn btn-primary" onClick={editHandler}>
            {label}
          </button>
        </div>
      </Card>
    </>
  );
}
