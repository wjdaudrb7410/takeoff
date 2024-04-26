import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const UseScrollTo = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }, 0);
  }, [pathname]);
  return;
};
