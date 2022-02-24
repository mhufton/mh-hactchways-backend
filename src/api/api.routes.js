const router = require("express").Router();
const controller = require("./api.controller");

router
  .route("/ping")
  .get(controller.ping);
  
module.exports = router;