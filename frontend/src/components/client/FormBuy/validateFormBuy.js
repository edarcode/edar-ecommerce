export const validateFormBuy = (dataFormBuy) => {
  const { address, tell } = dataFormBuy;
  const errors = {};
  if (address === "") {
    errors.address = "*";
  }
  if (tell === "") {
    errors.tell = "*";
  }
  return errors;
};
