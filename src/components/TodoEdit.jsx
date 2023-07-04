import React, { useContext, useEffect, useState } from "react";

import store from "../store/storeObj";
import { redirect, useNavigate } from "react-router-dom";
import Card from "./Card";

export default function TodoEdit({
  id,
  placeholder = "Todo",
  label = "Speichern",
  back = "Zurück",
}) {
  const todo = store.todoStore.getTodoByID(id);
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (todo) {
      setInputText(todo.title);
    }
  }, []);

  console.log("TODO ###", todo);
  if (!todo) {
    //navigate("/");
    //redirect("/");
    return (
      <>
        <Card header="Fehler">
          <h2>Ein Fehler ist aufgetreten!</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Zurück
          </button>
        </Card>
      </>
    );
  }

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

  function backHandler() {
    navigate("/");
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
        <p>
          <button
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
            onClick={backHandler}
          >
            {back}
          </button>
        </p>
      </Card>
    </>
  );
}
