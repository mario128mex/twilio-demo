const AppointmentModel = require('../../models/Appointment');
const CustomerModel = require('../../models/Customer');
const SpecialistModel = require('../../models/Specialist');
const {newAppointment: sendNewAppointmentSMS} = require('../../notifier/SMS');

module.exports = async params => {
  const appointment = new AppointmentModel(params);
  const {customerId, specialistId} = appointment;

  const customer = await CustomerModel.findById(customerId);
  if (!customer) {
    throw new Error(`Customer ${customerId} not found!`);
  }

  const specialist = await SpecialistModel.findById(specialistId);
  if (!specialist) {
    throw new Error(`Specialist ${specialistId} not found!`);
  }

  const SMSParams = {
    customerFullName: customer.fullName,
    specialistFullName: specialist.fullName,
    appointmentDateTime: appointment.dateTime,
    customerPhone: customer.phone,
    customerCountry: customer.country
  };

  sendNewAppointmentSMS(SMSParams);

  return appointment.save();
};
