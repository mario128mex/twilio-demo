const CreateAppointment = require('../../core/appointments/create-appointment');
const DeleteAppointment = require('../../core/appointments/delete-appointment');
const GetAppointmentById = require('../../core/appointments/get-appointment-by-id');
const GetAppointments = require('../../core/appointments/get-appointments');
const UpdateAppointment = require('../../core/appointments/update-appointment');
const UpdateAppointmentStatus = require('../../core/appointments/update-appointment-status');

const post = (req, res) => {
  CreateAppointment(req.body)
    .then(appointment => res.json(appointment))
    .catch(handleError(res));
};

const get = (req, res) => {
  GetAppointments(req.query)
    .then(appointment => res.json(appointment))
    .catch(handleError(res));
};

const getById = (req, res) => {
  GetAppointmentById(req.params.id)
    .then(appointment => {
      if (!appointment) {
        throw new Error('Not Found');
      }

      res.json(appointment);
    })
    .catch(handleError(res));
};

const remove = (req, res) => {
  DeleteAppointment(req.params.id)
    .then(result => {
      if (!result) {
        throw new Error('Not Found');
      }

      res.status(200).send('Success!');
    })
    .catch(handleError(res));
};

const update = (req, res) => {
  const {id} = req.params;
  const {body: data} = req;

  UpdateAppointment(id, data)
    .then(appointment => res.json(appointment))
    .catch(handleError(res));
};

const confirmAppointment = (req, res) => {
  const {body} = req;

  UpdateAppointmentStatus({status: 'accepted', ...body})
    .then(() => res.status(200).send('Success!'))
    .catch(handleError(res));
};

const cancelAppointment = (req, res) => {
  const { body } = req;

  UpdateAppointmentStatus({ status: 'canceled', ...body })
    .then(() => res.status(200).send('Success!'))
    .catch(handleError(res));
};

// TODO: this always returns 400 errors, use a middleware instead
const handleError = (res) => (err) => res.status(400).json({ error: err.toString() });

module.exports = {
  cancelAppointment,
  confirmAppointment,
  get,
  getById,
  post,
  remove,
  update
};
