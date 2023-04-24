const { Router } = require("express")
const { getDogsHandler, getDogByIdHandler, postDogHandler , deleteDogHandler} = require("../Handlers/DogsHandler");
const {getOriginHandler, getOrderHandler, getAZOrderHandler,getTempOrderHandler} = require("../Handlers/FiltersHandler")
const { postValidator, idValidator, nameValidator } = require("../middlewares/validators")

const dogsRouter = Router();

dogsRouter.get("/temporder", getTempOrderHandler)
dogsRouter.get("/azorder", getAZOrderHandler)
dogsRouter.get("/order", getOrderHandler)
dogsRouter.get("/origin", getOriginHandler)
dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:id", getDogByIdHandler);
dogsRouter.post("/", postDogHandler);
dogsRouter.delete("/delete/:id", deleteDogHandler)

module.exports = dogsRouter;