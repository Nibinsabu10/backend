import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      res.status(403).json({ message: "You are not authorized" });
    }

    const ogToken = token.split(" ")[1];

    const isValid = jwt.verify(ogToken, process.env.USER_SECRET_KEY);
    console.log(isValid);
    next();
  } catch (e) {
    res.status(403).json({ message: "You are not authorized" });
  }
};

export default checkToken;
