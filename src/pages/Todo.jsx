import React, { useState } from "react";
import store from "../store/storeObj";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import TodoEdit from "../components/TodoEdit";

export default function Todo({ placeholder = "Todo", label = "Speichern" }) {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <>
      <TodoEdit id={id} />
    </>
  );
}
