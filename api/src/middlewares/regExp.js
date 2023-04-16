const validName = /^[a-z ,.'-]+$/i;
const validateImage = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
const validateWeight = /^(?!0)([1-9]|[1-4][0-9]|100)\s-\s(?!0)([1-9]|[1-4][0-9]|100)$/;
const validateHeight = /^(?!0)([1-9][0-9]?|99) - ([1-9][0-9]?|99)$/;
const validateLife = /^[1-2]?[0-9] ?- ?[1-2]?[0-9] years$/;
const validateIdUUID= new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');
const validateIdAPI= new RegExp('^(1|[1-9][0-9]{0,2}|2000)$')
const validateName= /^[a-zA-Z]{1,50}$/

module.exports={validName, validateImage, validateWeight, validateHeight, validateLife, validateIdUUID, validateIdAPI, validateName}