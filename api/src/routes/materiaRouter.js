const controller = require("../controllers/materiaController");
const express = require("express");
const router =   express.Router();

router
  .get("/materias",controller.list)
  .get("/materia/:id",controller.seleccionar)
  .post("/materia",controller.registrar)
  .put("/materia",controller.editar)
  .delete("/materia/:id",controller.eliminar);


module.exports = router;
