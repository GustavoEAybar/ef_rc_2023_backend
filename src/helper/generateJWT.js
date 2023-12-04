import jwt from "jsonwebtoken";

const generateJWT = (uid, userName) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, userName };
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "6h" },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
};

export default generateJWT;
