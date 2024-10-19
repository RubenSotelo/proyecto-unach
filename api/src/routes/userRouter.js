const controller = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router
  .get("/users/:tipo",controller.list)
  .post("/user",controller.login)
  .put("/user",controller.editar)
  .delete("/user/:id",controller.eliminar);


module.exports = router;
