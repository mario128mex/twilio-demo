const CustomerModel = require('../../models/Customer');

module.exports = params => CustomerModel.find(params);
