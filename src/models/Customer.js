const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    maxlength: 15
  },
  country: {
    type: String,
    uppercase: true,
    required: true,
    maxlength: 3
  }
}, {
  toObject: {virtuals: true},
  toJSON: {virtuals: true}
});

CustomerSchema
  .virtual('fullName')
  .get(function() {
    return `${this.firstName} ${this.lastName}`;
  });

CustomerSchema
  .path('country')
  .validate(
    country => country && country.length === 3,
    'Country code must have Alpha 3 format (like USA)'
  );

module.exports = mongoose.model('Customer', CustomerSchema);
