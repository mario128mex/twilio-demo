const CustomerModel = require('../../models/Customer');
const {countryCodes} = require('../../config');

module.exports = params => {
  const {country, phone} = params;
  const phoneWithCountryCode = countryCodes[country.toUpperCase()] + phone;

  const customer = new CustomerModel({...params, phone: phoneWithCountryCode});
  return customer.save();
};
