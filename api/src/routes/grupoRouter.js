const controller = require("../controllers/grupoController");
const express = require("express");
const router =   express.Router();

router
  .get("/grupos",controller.list)
  .get("/grupo/:id",controller.seleccionar)
  .post("/grupo",controller.registrar)
  .put("/grupo",controller.editar)
  .delete("/grupo/:id",controller.eliminar);


module.exports = router;
