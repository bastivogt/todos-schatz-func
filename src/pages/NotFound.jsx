import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export default function NotFound() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/");
  }
  return (
    <>
      <Card header="Seite nicht gefunden">
        <h2>404 - Todo nicht gefunden</h2>
        <p>
          <button className="btn btn-primary" onClick={clickHandler}>
            Zurück
          </button>
        </p>
      </Card>
    </>
  );
}
