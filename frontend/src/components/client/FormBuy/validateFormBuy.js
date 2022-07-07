export const validateFormBuy = (dataFormBuy) => {
  const { address, tell } = dataFormBuy;
  const errors = {};
  if (address === "") {
    errors.address = "*";
  }
  if (tell === "") {
    errors.tell = "*";
  } else {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < tell.length; i++) {
      const element = tell[i];
      if (!numbers.includes(element)) errors.tell = "*";
    }
  }
  return errors;
};
