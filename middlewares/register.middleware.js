const { Registrations } = require('../models/registration.model');

const RegisterExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registerId = await Registrations.findOne({ where: { id } });

    if (!registerId) {
      return res.status(404).json({
        status: 'error',
        message: 'the number ID not found',
      });
    }
    req.registerId = registerId;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegisterExist };
