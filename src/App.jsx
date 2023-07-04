import React, { useEffect, useState } from "react";

import { TodoContext } from "./TodoContext";

import store from "./store/storeObj";

import BaseLayout from "./components/BaseLayout";

import { HashRouter, Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";

export default function App() {
  const [updater, setUpdater] = useState({});
  store.todoStore.onUpdate = function () {
    store.todoStore.save();
    setUpdater({ ...updater });
  };

  useEffect(() => {
    store.todoStore.setTodos(store.todoStore.load());
  }, []);

  return (
    <>
      <HashRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/todo/:id" element={<Todo />} />
          </Routes>
        </BaseLayout>
      </HashRouter>
    </>
  );
}
