import { useEffect } from "react";

export default function usePageTitle({
  prefix = "",
  title = "",
  divider = "-",
}) {
  useEffect(() => {
    document.title = `${prefix} ${divider} ${title}`;
  }, [prefix, title, divider]);
}
