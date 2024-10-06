const { check } = require('express-validator');

const userValidationRules = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Invalid email').isEmail(),
];

module.exports = userValidationRules;