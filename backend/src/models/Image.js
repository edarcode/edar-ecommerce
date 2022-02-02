const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Image",
    {
      url: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
    },
    { timestamps: false }
  );
};
