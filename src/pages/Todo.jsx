import React, { useContext, useState } from "react";
//import store from "../store/storeObj";
import { useParams } from "react-router-dom";
import TodoEdit from "../components/TodoEdit";
import usePageTitle from "../hooks/usePageTitle";
import useMetaDescription from "../hooks/useMetaDescription";

export default function Todo() {
  const params = useParams();
  const id = parseInt(params.id);

  usePageTitle({ prefix: "Todos", title: `Todo [id: ${id}]` });
  useMetaDescription(`Todo [id: ${id}]`);

  return (
    <>
      <TodoEdit id={id} />
    </>
  );
}
