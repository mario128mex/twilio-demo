const SpecialistModel = require('../../models/Specialist');

module.exports = (id) => SpecialistModel.findByIdAndDelete(id);
