import React, { useState } from "react";
import store from "../store/storeObj";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Todo({ placeholder = "Todo", label = "Speichern" }) {
  const params = useParams();
  const id = parseInt(params.id);
  const todo = store.todoStore.getTodoByID(id);
  const [inputText, setInputText] = useState(todo.title);
  const navigate = useNavigate();

  function inputChangeHandler(evt) {
    setInputText(evt.target.value);
  }

  function inputKeyUpHandler(evt) {
    if (evt.key === "Enter") {
      addTodoHandler();
    }
  }

  function addTodoHandler() {
    if (inputText !== "") {
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
      <div>TodoEdit</div>
      <p>{todo.title}</p>
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
          <button className="btn btn-primary" onClick={addTodoHandler}>
            {label}
          </button>
        </div>
      </Card>
    </>
  );
}
