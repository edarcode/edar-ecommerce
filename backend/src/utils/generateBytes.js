const crypto = require("crypto");

module.exports = {
  generateBytes: () => {
    return crypto.randomBytes(20).toString("hex");
  },
};
