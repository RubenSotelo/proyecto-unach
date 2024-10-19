const controller = require("../controllers/laboratorioController");
const express = require("express");
const router =   express.Router();

router
  .get("/laboratorios",controller.list)
  .get("/laboratorio/:id",controller.seleccionar)
  .post("/laboratorio",controller.registrar)
  .put("/laboratorio",controller.editar)
  .delete("/laboratorio/:id",controller.eliminar);


module.exports = router;
