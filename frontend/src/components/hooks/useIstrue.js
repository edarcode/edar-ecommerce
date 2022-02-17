import { useState } from "react";

export const useIstrue = () => {
  const [isTrue, setIsTrue] = useState(false);
  return { isTrue, setIsTrue };
};
