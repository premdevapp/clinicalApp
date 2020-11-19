import patientController from "./patient.cotroller";
import clinicalsController from "./clinicals.cotroller";

module.exports = (router) => {
  router.get("/patients", patientController.getAll);
  router.get("/patients/:id", patientController.findById);
  router.post("/patients", patientController.create);
  router.put("/patients/:id", patientController.update);
  router.patch("/patients/:id", patientController.patch);
  router.delete("/patients/:id", patientController.delete);

  router.get("/clinicals/:patientId", clinicalsController.getAll);
  router.post("/clinicals", clinicalsController.create);
  router.put(
    "/clinicals/:patientId/:componentName",
    clinicalsController.update
  );
  router.delete(
    "/clinicals/:patientId/:componentName",
    clinicalsController.delete
  );
};
