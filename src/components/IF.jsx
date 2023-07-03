import React from "react";

export default function IF({ condition = true, THEN = null, ELSE = null }) {
  return <>{condition ? THEN : ELSE}</>;
}
