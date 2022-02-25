export const isEmail = ({ str }) => {
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(str)) {
    return true;
  }
  return false;
};
