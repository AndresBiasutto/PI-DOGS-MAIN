const { filterOrigin, orderByWeight, namesInOrder, findTemperament } = require("../controllers/FiltersControllers")

const getOriginHandler = async (req, res) => {
    const { origin } = req.query;
    try {
        const filtredOrigin = await filterOrigin(origin)
        res.status(200).json(filtredOrigin)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
const getOrderHandler = async (req, res) => {
    try {
        const { orderby } = req.query
        const weightInOrder = await orderByWeight(orderby)
        res.status(200).send(weightInOrder)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
const getAZOrderHandler =async (req, res) => {
    const { azorder } = req.query
    try {
        const orderNames= await namesInOrder(azorder)
        res.status(200).json(orderNames)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getTempOrderHandler= async (req, res)=>{
    const { temporder } = req.query
    try {
        const dogTemperament= await findTemperament(temporder)
        res.status(200).json(dogTemperament)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = { getOriginHandler, getOrderHandler, getAZOrderHandler,getTempOrderHandler }