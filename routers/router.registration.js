const express = require('express');
const { RegisterExist } = require('../middlewares/register.middleware');
const {
  AllRegistrations,
  CreateRegister,
  SearchRegisterById,
  UpdateRegister,
  DeleteRegister,
} = require('../controllers/registration.controller');

const router = express.Router();

router.get('/', AllRegistrations);
router.post('/', CreateRegister);
router.get('/:id', RegisterExist, SearchRegisterById);
router.patch('/:id', RegisterExist, UpdateRegister);
router.delete('/:id', RegisterExist, DeleteRegister);

module.exports = { registrationRouter: router };
