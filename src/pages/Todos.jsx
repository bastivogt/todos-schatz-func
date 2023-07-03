import React, { useEffect } from "react";
import Hero from "./../components/Hero";
import Card from "./../components/Card";
import Navbar from "./../components/Navbar";
import TodoAdd from "./../components/TodoAdd";
import IF from "./../components/IF";
import TodoItem from "./../components/TodoItem";
import TodoList from "./../components/TodoList";

import store from "../store/storeObj";

export default function Todos() {
  useEffect(() => {
    console.log("Todos Page", store.todoStore.todos);
  });
  return (
    <>
      <TodoAdd></TodoAdd>
      <IF
        condition={store.todoStore.activeTodos.length !== 0}
        THEN={
          <Card header="Nicht erledigte Todos">
            <TodoList>
              {store.todoStore.activeTodos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })}
            </TodoList>
          </Card>
        }
      />

      <IF
        condition={store.todoStore.doneTodos.length !== 0}
        THEN={
          <Card header="Erledigte Todos">
            <TodoList>
              {store.todoStore.doneTodos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })}
            </TodoList>
          </Card>
        }
      />
    </>
  );
}
