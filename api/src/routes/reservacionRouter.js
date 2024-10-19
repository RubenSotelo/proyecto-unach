const controller = require("../controllers/reservacionController");
const express = require("express");
const router = express.Router();

router
  .get("/reservaciones",controller.list)
  .post("/reservacion",controller.registro)
  .put("/reservacion",controller.editar)
  .delete("/reservacion/:id",controller.eliminar);


module.exports = router;
