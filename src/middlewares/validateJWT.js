import jwt from "jsonwebtoken";

const validateJwt = (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) {
    res.status(401).json({ message: "Need to send a token in the request" });
  }
  try {
    jwt.verify(token, process.env.SECRET_JWT);
  } catch {
    res
      .status(401)
      .json({ message: "Invalid token, please authentification failed" });
  }
  next();
};

export default validateJwt;
