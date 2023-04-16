const {validName, validateImage, validateWeight, validateHeight, validateLife, validateIdUUID, validateIdAPI, validateName}=require("./regExp")

const postValidator = (req, res, next) => {
    const { name, image, weight, height, life_span, temperament } = req.body;

    if (!validName.test(name)) return res.status(400).send("Usar solo letras (mayúsculas o minúsculas), espacios y caracteres acentuados (á, é, í, ó, ú, Á, É, Í, Ó, Ú) y la letra ñ en la cadena de texto");
    if (!validateImage.test(image)) return res.status(400).send("La imagen debe ser una url válida");
    if (!validateWeight.test(weight)) return res.status(400).send("peso en formato no valido");
    if (!validateHeight.test(height)) return res.status(400).send("Altura no valida");
    if (!validateLife.test(life_span)) return res.status(400).send("tu perro no piensa morir?");
    if (!temperament) return res.status(400).send("falta el temperamento");

    next();
}

const idValidator= (req,res, next)=>{
    const {id}= req.params;
    
    if (!validateIdAPI.test(id) && !validateIdUUID.test(id)) return res.status(400).send("id no valido");

    next();
}

const nameValidator= (req,res,next)=>{
    const {name}= req.query

    if (!validateName.test(name)) return res.status(404).send("Falta ingresar el nombre, usar solo letras y espacios")
    next();
}

module.exports = { postValidator, idValidator, nameValidator };