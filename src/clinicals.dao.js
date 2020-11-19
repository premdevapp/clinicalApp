import mongoose from "mongoose";
import clinicalsSchema from "./clinicals.model";

clinicalsSchema.statics = {
  get: function (query, callback) {
    this.find(query, callback);
  },
  create: function (data, callback) {
    const clinicalData = new this(data);
    clinicalData.save(callback);
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

const clinicalsModel = mongoose.model(
  "Clinicals",
  clinicalsSchema,
  "clinicals"
);

module.exports = clinicalsModel;
