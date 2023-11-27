import { Router } from "express";
import { 
  showServices,
  createService,
  getOne,
  editService,
  updateService,
  deleteService } from "../controllers/services.controllers";
import serviceValidation from "../middlewares/serviceValidations";
import validateJWT from "../middlewares/validateJWT";

const services = Router();

services
  .route("/")
  .get(showServices)
  .post([validateJWT, serviceValidation], createService)

services
  .route("/:id")
  .get(getOne)
  .put([validateJWT, serviceValidation], updateService)
  .patch([validateJWT, serviceValidation], editService)
  .delete(deleteService)

export default services;