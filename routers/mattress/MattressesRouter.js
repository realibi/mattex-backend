const express = require("express");
const casesRouter = require("./CasesRouter");
const basesRouter = require("./BasesRouter");
const layersRouter = require("./LayersRouter");

let mattressesRouter = express.Router();
mattressesRouter.use("/cases", casesRouter);
mattressesRouter.use("/bases", basesRouter);
mattressesRouter.use("/layers", layersRouter);

module.exports = mattressesRouter;