const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { User } = require("../db");

module.exports = {
  tokenValidateForGet: async (req, res, next) => {
    try {
      const { token } = req.query;
      if (!token) return res.json({ msg: "No token provided" });
      const { id } = jwt.verify(token, SECRET); //lanza err si no es valido
      const user = await User.findByPk(id);
      if (!user) return res.json({ msg: "Unauthorized" });
      req.user = user;
      next();
    } catch (error) {
      res.json({ msg: "Unauthorized" });
    }
  },
};
