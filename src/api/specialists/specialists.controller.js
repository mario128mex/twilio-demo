const CreateSpecialist = require('../../core/specialists/create-specialist');
const GetSpecialists = require('../../core/specialists/get-specialists');
const GetSpecialistById = require('../../core/specialists/get-specialist-by-id');
const DeleteSpecialist = require('../../core/specialists/delete-specialist');
const UpdateSpecialist = require('../../core/specialists/update-specialist');

const post = (req, res) => {
  CreateSpecialist(req.body)
    .then(specialist => res.json(specialist))
    .catch(handleError(res));
};

const get = (req, res) => {
  GetSpecialists(req.query)
    .then(specialist => res.json(specialist))
    .catch(handleError(res));
};

const getById = (req, res) => {
  GetSpecialistById(req.params.id)
    .then(specialist => {
      if (!specialist) {
        throw new Error('Not Found');
      }

      res.json(specialist);
    })
    .catch(handleError(res));
};

const remove = (req, res) => {
  DeleteSpecialist(req.params.id)
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

  UpdateSpecialist(id, data)
    .then(specialist => res.json(specialist))
    .catch(handleError(res));
};

// TODO: this always returns 400 errors, use a middleware instead
const handleError = (res) => (err) => res.status(400).json({ error: err.toString() });

module.exports = {
  post,
  get,
  getById,
  remove,
  update
};
