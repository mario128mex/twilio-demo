const CustomerModel = require('../../models/Customer');

module.exports = (id) => CustomerModel.findByIdAndDelete(id);
