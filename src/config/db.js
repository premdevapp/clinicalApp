import mongoose from "mongoose";
import props from "./properties";
module.exports = function () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(props.DB, options);
};
