import mongoose from "mongoose";
import patientSchema from "./patient.model";

patientSchema.statics = {
  get: function (query, callback) {
    this.find(query, callback);
  },
  create: function (data, callback) {
    const patient = this(data);
    patient.save(callback);
  },
  update: function (query, updateData, callback) {
    this.findOneAndUpdate(
      query,
      { $set: updateData },
      { useFindAndModify: false },
      callback
    );
  },
  patch: function (query, updateData, callback) {
    this.findOneAndUpdate(
      query,
      { $set: updateData },
      { useFindAndModify: false },
      callback
    );
  },
  delete: function (query, callback) {
    this.findOneAndDelete(query, { useFindAndModify: false }, callback);
  },
};

const patientModel = mongoose.model("Patient", patientSchema, "patient");

module.exports = patientModel;
