import React from "react";

export default function Hero({ children }) {
  return (
    <>
      <div
        className={"h-100 p-5 border rounded-3 mb-4 mt-4 text-white bg-dark"}
      >
        <div className="d-flex flex-row justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </>
  );
}
