const SpecialistModel = require('../../models/Specialist');

module.exports = (id, data) => {
  return SpecialistModel.findByIdAndUpdate(id, data)
    .then(SpecialistModel.save)
    .then(() => SpecialistModel.findById(id));
};
