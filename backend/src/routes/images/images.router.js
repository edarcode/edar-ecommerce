const { Router } = require("express");
const createImage = require("./postController/createImage.controller");
const updateImage = require("./putController/updateImage.controller");
const images = Router();

images.route("/").post(createImage);
images.route("/").put(updateImage);

module.exports = images;
