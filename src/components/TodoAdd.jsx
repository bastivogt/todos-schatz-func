import React, { useState } from "react";

import Card from "./Card";

import store from "../store/storeObj";

export default function TodoAdd({
  title = "Todo hinzufügen",
  label = "Todo hinzufügen",
  placeholder = "Todo",
  onAddTodo,
}) {
  const [inputText, setInputText] = useState("");

  function addTodoHandler() {
    if (inputText !== "") {
      store.todoStore.addTodo(inputText);
      if (typeof onAddTodo === "function") onAddTodo({ title: inputText });
      setInputText("");
    }
  }

  function inputChangeHandler(evt) {
    setInputText(evt.target.value);
  }

  function inputKeyUpHandler(evt) {
    if (evt.key === "Enter") {
      addTodoHandler();
    }
  }

  return (
    <Card header={title}>
      <div className="input-group">
        <input
          type="text"
          placeholder={placeholder}
          className="form-control"
          value={inputText}
          onChange={inputChangeHandler}
          onKeyUp={inputKeyUpHandler}
        />
        <button className="btn btn-primary" onClick={addTodoHandler}>
          {label}
        </button>
      </div>
    </Card>
  );
}
