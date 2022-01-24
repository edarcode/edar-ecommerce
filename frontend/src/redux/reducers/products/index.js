const initialStore = {
  product: {},
};

export const products = (store = initialStore, { type, payload }) => {
  switch (type) {
    /* case value:
      return; */
    default:
      return store;
  }
};
