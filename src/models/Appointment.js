const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  specialistId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'canceled', 'rejected'],
    default: 'pending'
  },
  dateTime: {
    type: Date,
    required: true
  }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

AppointmentSchema.virtual('customer', {
  ref: 'Customer',
  localField: 'customerId',
  foreignField: '_id',
  justOne: true
});

AppointmentSchema.virtual('specialist', {
  ref: 'Specialist',
  localField: 'specialistId',
  foreignField: '_id',
  justOne: true
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
