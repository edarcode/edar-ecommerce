export const outlineErr = ({ err }) =>
  (err === "none" && "none") || (err && "2px solid red") || "2px solid green";
