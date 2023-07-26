import React from "react";
import store from "../store/storeObj";

export default function Navbar() {
  function resetHandler(evt) {
    evt.preventDefault();
    if (window.confirm("Willst du wirklich alle Todos resetten?")) {
      store.todoStore.setTodos([]);
    }
  }

  function infoHandler(evt) {
    evt.preventDefault();
    alert("Ich liebe Dich. <3");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            className="navbar-brand"
            href="#"
            onClick={(evt) => evt.preventDefault()}
          >
            <img src="/done.svg" />
          </a>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={resetHandler}>
                  Reset Todos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={infoHandler}>
                  Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
