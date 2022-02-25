import { isRight, isWrong } from "../consts/colors";

export const outlineErr = ({ err }) =>
  (err === "none" && "none") ||
  (err && `2px solid ${isWrong}`) ||
  `2px solid ${isRight}`;
