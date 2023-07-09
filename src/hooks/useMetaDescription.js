import { useEffect } from "react";

export default function useMetaDescription(desc) {
  useEffect(() => {
    const el = document.querySelector("meta[name='description']");
    if (!el) {
      console.error("Kein Meta Tag mit description vorhanden!");
      return;
    }

    el.setAttribute("content", desc);
  }, [desc]);
}
