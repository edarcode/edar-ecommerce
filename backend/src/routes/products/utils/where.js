module.exports = {
  where: ({ name, min, max, Op }) => {
    if (min && max && name) {
      return {
        name: { [Op.iLike]: `%${name}%` },
        price: { [Op.between]: [min, max] },
        state: true,
      };
    } else if (min && max) {
      return {
        price: { [Op.between]: [min, max] },
        state: true,
      };
    } else if (name) {
      return {
        name: { [Op.iLike]: `%${name}%` },
        state: true,
      };
    } else {
      return { state: true };
    }
  },
};
