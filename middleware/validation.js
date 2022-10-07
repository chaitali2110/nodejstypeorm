const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    body('name').notEmpty(),
    body('username').notEmpty(),
    body('email').isEmail().normalizeEmail().notEmpty(),
    body('password').isLength({
        min: 6
    }).notEmpty()
  ]
}

const loginValidation = () =>{
  return [
    body('email').isEmail().normalizeEmail().notEmpty(),
    body('password').isLength({
        min: 6
    }).notEmpty()
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  loginValidation,
  validate,
}