const bcrypt = require("bcrypt");

module.exports = {
  comparePassword: async (password, passwordDB) => {
    const isRight = await bcrypt.hash(password, passwordDB);
    return isRight;
  },
};
