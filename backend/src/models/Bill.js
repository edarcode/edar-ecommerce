const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Bill", {
    status: {
      type: DataTypes.ENUM("pending", "done"),
      defaultValue: "pending",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tell: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });
};
