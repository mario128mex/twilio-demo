const CreateCustomer = require('../../core/customers/create-customer');
const GetCustomers = require('../../core/customers/get-customers');
const GetCustomerById = require('../../core/customers/get-customer-by-id');
const DeleteCustomer = require('../../core/customers/delete-customer');
const UpdateCustomer = require('../../core/customers/update-customer');

const post = (req, res) => {
  CreateCustomer(req.body)
    .then(customer => res.json(customer))
    .catch(handleError(res));
};

const get = (req, res) => {
  GetCustomers(req.query)
    .then(customers => res.json(customers))
    .catch(handleError(res));
};

const getById = (req, res) => {
  GetCustomerById(req.params.id)
    .then(customer => {
      if (!customer) {
        throw new Error('Not Found');
      }

      res.json(customer);
    })
    .catch(handleError(res));
};

const remove = (req, res) => {
  DeleteCustomer(req.params.id)
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

  UpdateCustomer(id, data)
    .then(customer => res.json(customer))
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
