const { User } = require("../db");
const { encryptPassword } = require("./encryptPassword");

module.exports = async (superUser) => {
  try {
    const { email, password } = superUser;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password: await encryptPassword(password), role: "admin" },
    });
    return created;
  } catch (error) {
    console.log(error);
  }
};
