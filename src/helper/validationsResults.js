import { validationResult } from "express-validator";

export const validationsResults = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.send({ errors: errors.array()});
    }
    next()
};