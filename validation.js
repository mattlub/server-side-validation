const Joi = require('joi');

const loginValidation = {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
};

const signupValidation = {
  
  // write signup validation here
};


module.exports = {
  loginValidation,
  signupValidation
}
