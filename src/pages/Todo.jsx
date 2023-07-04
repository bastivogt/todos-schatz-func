import React, { useContext, useState } from "react";
//import store from "../store/storeObj";
import { useParams } from "react-router-dom";
import TodoEdit from "../components/TodoEdit";

export default function Todo() {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <>
      <TodoEdit id={id} />
    </>
  );
}
