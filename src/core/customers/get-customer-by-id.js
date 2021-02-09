const CustomerModel = require('../../models/Customer');

module.exports = id => CustomerModel.findById(id);
