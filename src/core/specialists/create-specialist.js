const SpecialistModel = require('../../models/Specialist');

module.exports = params => {
  const specialist = new SpecialistModel(params);
  return specialist.save();
};
