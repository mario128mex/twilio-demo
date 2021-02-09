const SpecialistModel = require('../../models/Specialist');

module.exports = id => SpecialistModel.findById(id);
