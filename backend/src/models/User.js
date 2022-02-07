const { DataTypes } = require("sequelize");
const { generateBytes } = require("../utils/generateBytes");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      validator: {
        isEmail: true,
      },
      unique: true,
    },
    verifyEmail: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tokenVerifyEmail: {
      type: DataTypes.STRING,
      defaultValue: generateBytes,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    role: {
      type: DataTypes.ENUM("client", "admin"),
      defaultValue: "client",
    },
  });
};
