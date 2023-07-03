import React from "react";

export default function Card({ header = "Header", children }) {
  return (
    <>
      <div className="card mb-4">
        <h5 className="card-header">{header}</h5>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}
