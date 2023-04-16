const { Router } = require("express")
const { getDogsHandler, getDogByIdHandler, postDogHandler } = require("../Handlers/DogsHandler");
const {getOriginHandler, getOrderHandler} = require("../Handlers/FiltersHandler")
const { postValidator, idValidator, nameValidator } = require("../middlewares/validators")

const dogsRouter = Router();

dogsRouter.get("/order", getOrderHandler)
dogsRouter.get("/origin", getOriginHandler)
dogsRouter.get("/", nameValidator, getDogsHandler);
dogsRouter.get("/:id", idValidator, getDogByIdHandler);
dogsRouter.post("/", postValidator, postDogHandler);

module.exports = dogsRouter;