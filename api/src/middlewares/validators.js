const {validName, validateImage, validateWeight, validateHeight, validateLife}=require("./regExp")

const postValidator = (req, res, next) => {
    const { name, image, weight, height, life_span} = req.body;

    if (!validName.test(name)) return res.status(400).send("Usar solo letras (mayúsculas o minúsculas), espacios y caracteres acentuados (á, é, í, ó, ú, Á, É, Í, Ó, Ú) y la letra ñ en la cadena de texto");
    if (!validateImage.test(image)) return res.status(400).send("La imagen debe ser una url válida");
    if (!validateWeight.test(weight)) return res.status(400).send("peso en formato no valido");
    if (!validateHeight.test(height)) return res.status(400).send("Altura en formato no valido");
    if (!validateLife.test(life_span)) return res.status(400).send("Edad debe ser entre 1 y 25");
    next();
}


module.exports = { postValidator };