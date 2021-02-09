const SpecialistModel = require('../../models/Specialist');

module.exports = params => SpecialistModel.find(params);
