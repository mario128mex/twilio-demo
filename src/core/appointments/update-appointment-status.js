const AppointmentModel = require('../../models/Appointment');
const CustomerModel = require('../../models/Customer');
const SpecialistModel = require('../../models/Specialist');
const {
  appointmentCanceled: sendAppointmentCanceledSMS,
  appointmentConfirmed: sendAppointmentConfirmedSMS
} = require('../../notifier/SMS');

// TODO: a customer can have multiple appointments, make sure to cover that case
module.exports = async ({customerPhone, status}) => {
  const customer = await CustomerModel.findOne({phone: customerPhone});
  if (!customer) {
    throw new Error(`Customer with phone number ${customerPhone} not found!`);
  }

  const appointment = await AppointmentModel.findOne({customerId: customer.id});
  if (!appointment) {
    throw new Error(`No appointment found for customer ${customer.id}`);
  }

  appointment.status = status;
  await appointment.save() ;

  const specialist = await SpecialistModel.findById(appointment.specialistId);
  if (!specialist) {
    throw new Error(`Specialist ${appointment.specialistId} not found!`);
  }

  const SMSParams = {
    customerFullName: customer.fullName,
    specialistFullName: specialist.fullName,
    appointmentDateTime: appointment.dateTime,
    specialistPhone: specialist.phone,
  };

  if (status === 'accepted') {
    sendAppointmentConfirmedSMS(SMSParams);
  } else if (status === 'canceled') {
    sendAppointmentCanceledSMS(SMSParams);
  } else {
    console.warn(`unsupported status ${status}`);
  }
};
