const validName = /^[a-z ,.'-]+$/i;
const validateImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
const validateWeight = /^(?:[1-9]|[1-9][0-9]|100)\s-\s(?:[1-9]|[1-9][0-9]|100)$/;
const validateHeight = /^(?:[1-9]|[1-9][0-9]|100)\s-\s(?:[1-9]|[1-9][0-9]|100)$/;
const validateLife = /^^(?:[1-9]|[1-9][0-9]|1[0-9]|2[0-5])\s-\s(?:[1-9]|[1-9][0-9]|1[0-9]|2[0-5])\syears$/;



module.exports={validName, validateImage, validateWeight, validateHeight, validateLife}