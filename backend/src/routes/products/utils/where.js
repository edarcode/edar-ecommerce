module.exports = {
  where: ({ name, min, max, Op, state }) => {
    if (min && max && name) {
      return {
        name: { [Op.iLike]: `%${name}%` },
        price: { [Op.between]: [min, max] },
        state: (state && state) || true,
      };
    } else if (min && max) {
      return {
        price: { [Op.between]: [min, max] },
        state: (state && state) || true,
      };
    } else if (name) {
      return {
        name: { [Op.iLike]: `%${name}%` },
        state: (state && state) || true,
      };
    } else {
      return { state: (state && state) || true };
    }
  },
};
