const bcrypt = require("bcrypt");

module.exports = {
  comparePassword: async (password, passwordDB) => {
    const isRight = await bcrypt.compare(password, passwordDB);
    return isRight;
  },
};
