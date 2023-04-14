const {Router}= require("express");
const { getTemperamentHandler, postTemperamentHandler } = require("../Handlers/TemperamentsHandler");


const temperamentsRouter= Router();

temperamentsRouter.get("/", getTemperamentHandler);
//temperamentsRouter.get("/:id", getDogByIdHandler);
  temperamentsRouter.post("/",postTemperamentHandler);

module.exports= temperamentsRouter;