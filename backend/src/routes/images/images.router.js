const { Router } = require("express");
const deleteImage = require("./deleteController/deleteImage.controller");
const createImage = require("./postController/createImage.controller");
const updateImage = require("./putController/updateImage.controller");
const images = Router();

images.route("/").post(createImage);
images.route("/").put(updateImage);
images.route("/").delete(deleteImage);

module.exports = images;
