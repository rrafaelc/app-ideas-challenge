import { useState, useEffect } from "react";

function getWindowsDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowsDimension() {
  const [dimension, setDimension] = useState(getWindowsDimension());

  useEffect(() => {
    const handleResize = () => {
      setDimension(getWindowsDimension());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
}
