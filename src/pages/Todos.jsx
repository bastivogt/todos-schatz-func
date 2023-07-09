import React, { useEffect } from "react";
import Hero from "./../components/Hero";
import Card from "./../components/Card";
import Navbar from "./../components/Navbar";
import TodoAdd from "./../components/TodoAdd";
import IF from "./../components/IF";
import TodoItem from "./../components/TodoItem";
import TodoList from "./../components/TodoList";

import store from "../store/storeObj";
import usePageTitle from "../hooks/usePageTitle";
import useMetaDescription from "../hooks/useMetaDescription";

export default function Todos() {
  usePageTitle({ prefix: "Todos", title: "Alle Todos" });
  useMetaDescription("Alle Todos");
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
