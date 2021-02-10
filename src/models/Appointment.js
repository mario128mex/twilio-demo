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
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
