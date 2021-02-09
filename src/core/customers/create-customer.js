const CustomerModel = require('../../models/Customer');

module.exports = params => {
  const customer = new CustomerModel(params);
  return customer.save();
};
