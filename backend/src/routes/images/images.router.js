const { Router } = require("express");
const createImage = require("./postController/createImage.controller");
const images = Router();

images.route("/").post(createImage);

module.exports = images;
