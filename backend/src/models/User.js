const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        validator: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      type: {
        type: DataTypes.ENUM("client", "admin"),
        defaultValue: "client",
      },
    },
    { timestamps: false }
  );
};
