const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpecialistSchema = new Schema({
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
  },
  occupation: {
    type: String,
    required: true,
    maxlength: 50
  },
  title: {
    type: String,
    required: false,
    maxlength: 15
  }
});

SpecialistSchema
  .virtual('fullName')
  .get(() => `${this.firstName} ${this.lastName}`);

SpecialistSchema
  .path('country')
  .validate(
    country => country && country.length === 3,
    'Country code must have Alpha 3 format (like USA)'
  );

module.exports = mongoose.model('Specialist', SpecialistSchema);
