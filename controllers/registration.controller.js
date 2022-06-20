const { Registrations } = require('../models/registration.model');
const colors = require('colors');

const AllRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();
    res.status(200).json({
      status: 'succesfull',
      registrations,
    });
  } catch (error) {
    console.log(error);
  }
};

const CreateRegister = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegister = await Registrations.create({ entranceTime });
    res.status(201).json({
      status: 'succesfull',
      message: 'register created',
      newRegister,
    });
  } catch (error) {
    console.log(error);
  }
};

const SearchRegisterById = async (req, res) => {
  try {
    const { registerId } = req;
    res.status(200).json({
      status: 'successfull',
      message: 'the ID has been found',
      registerId,
    });
  } catch (error) {
    console.log(error);
  }
};

const UpdateRegister = async (req, res) => {
  try {
    const { registerId } = req;
    const { exitTime, status } = req.body;
    await registerId.update({ exitTime, status });
    res.status(201).json({
      status: 'success',
      message: 'register updated',
    });
  } catch (error) {
    console.log(error);
  }
};

const DeleteRegister = async (req, res) => {
  try {
    const { registerId } = req;
    await registerId.update({ status: 'cancelled' });
    res.status(201).json({
      status: 'success',
      message: 'the status has been changed',
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  AllRegistrations,
  CreateRegister,
  SearchRegisterById,
  UpdateRegister,
  DeleteRegister,
};
