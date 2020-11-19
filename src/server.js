import express from "express";
import props from "./config/properties";
import db from "./config/db";
import bodyParser from "body-parser";
import clinicalRoutes from "./routes";

//invoke database connection
db();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const clinicalRouter = express.Router();
clinicalRoutes(clinicalRouter);

app.use("/clinicalapi", clinicalRouter);

app.listen(props.PORT, (err) => {
  if (err) console.error(err);
  console.log("listen on localhost ", props.PORT);
});
