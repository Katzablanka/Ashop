const {body, validationResult} = require('express-validator/check');

 const validators = {
    userValidator:[
    body('email').trim().isEmail().normalizeEmail(),
    body('name').not().isEmpty().trim(),
    body('phone').not().isEmpty().isInt(),
    body('rooms').not().isEmpty(),
    body('price').not().isEmpty().isInt()
    ]
}

module.exports = validators;