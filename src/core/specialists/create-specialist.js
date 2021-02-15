const SpecialistModel = require('../../models/Specialist');
const {countryCodes} = require('../../config');

module.exports = params => {
  const {country, phone} = params;
  const phoneWithCountryCode = countryCodes[country.toUpperCase()] + phone;

  const specialist = new SpecialistModel({...params, phone: phoneWithCountryCode});
  return specialist.save();
};
