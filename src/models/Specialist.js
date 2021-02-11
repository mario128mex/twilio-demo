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
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

SpecialistSchema
  .virtual('fullName')
  .get(function() {
    return `${this.title || ''} ${this.firstName} ${this.lastName}`.trim();
  });

SpecialistSchema
  .path('country')
  .validate(
    country => country && country.length === 3,
    'Country code must have Alpha 3 format (like USA)'
  );

module.exports = mongoose.model('Specialist', SpecialistSchema);
