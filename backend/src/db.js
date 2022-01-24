require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename); // me da el nombre del archivo donde estoy si le paso una ruta, _filename es la ruta donde estoy

const modelDefiners = []; // seria un array de cada modelo

// Leemos todos los archivos de la carpeta models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models")) // ["file1.js","file2.js"]
  .filter(
    (element) =>
      element.indexOf(".") !== 0 &&
      element !== basename &&
      element.slice(-3) === ".js"
  ) // ["file1","file2"]
  .forEach((element) => {
    modelDefiners.push(require(path.join(__dirname, "/models", element))); // empezamos a requerir cada model y lo pusheamos a modelDefiners
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
