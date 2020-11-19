import dao from "./clinicals.dao";
import mongodb from "mongodb";

exports.getAll = (req, res) => {
  dao.get(
    { patient: mongodb.ObjectID(req.params.patientId) },
    (err, clinicalData) => {
      if (err) console.error(err);
      res.send(clinicalData);
    }
  );
};

exports.create = (req, res) => {
  const clinicals = req.body;
  dao.create(clinicals, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
};

exports.update = (req, res) => {
  const clinicals = {
    componentValue: req.body.componentValue,
  };
  dao.update(
    {
      patient: mongodb.ObjectID(req.params.patientId),
      componentName: req.params.componentName,
    },
    clinicals,
    (err, result) => {
      if (err) console.error(err);
      res.send(result);
    }
  );
};

exports.delete = (req, res) => {
  dao.delete(
    {
      patient: mongodb.ObjectID(req.params.patientId),
      componentName: req.params.componentName,
    },
    (err, result) => {
      if (err) console.error(err);
      res.send(result);
    }
  );
};
