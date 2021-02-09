const CustomerModel = require('../../models/Customer');

module.exports = (id, data) => {
  return CustomerModel.findByIdAndUpdate(id, data)
    .then(CustomerModel.save)
    .then(() => CustomerModel.findById(id));
};
