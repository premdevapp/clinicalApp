import dao from "./patient.dao";

exports.getAll = (req, res) => {
  dao.get({}, (err, patients) => {
    if (err) console.error(err);
    res.send(patients);
  });
};

exports.findById = (req, res) => {
  dao.get({ _id: req.params.id }, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
};

exports.create = (req, res) => {
  const patient = req.body;
  dao.create(patient, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
};

exports.update = (req, res) => {
  const patient = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  dao.update({ _id: req.params.id }, patient, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};
exports.patch = (req, res) => {
  const patient = req.body;
  dao.patch({ _id: req.params.id }, patient, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};

exports.delete = (req, res) => {
  dao.delete({ _id: req.params.id }, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
};
