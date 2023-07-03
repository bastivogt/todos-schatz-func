import React from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero className="mt-4">
          <h1>Todos</h1>
          <img src="/favorite.svg" />
        </Hero>
        {children}
      </div>
    </>
  );
}
