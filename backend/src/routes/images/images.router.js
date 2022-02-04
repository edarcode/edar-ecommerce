const { Router } = require("express");
const deleteImage = require("./deleteController/deleteImage.controller");
const getImages = require("./getController/getImages.controller");
const createImage = require("./postController/createImage.controller");
const updateImage = require("./putController/updateImage.controller");
const images = Router();

images.route("/").post(createImage);
images.route("/").put(updateImage);
images.route("/").delete(deleteImage);
images.route("/").get(getImages);

module.exports = images;
