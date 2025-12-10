import connection from "../../../config/db.js";
import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({
      message: "No Token Found!!!",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
};

export const VerifyUser = (req, res) => {
  const userId = req.user.id;

  const sql = "SELECT * FROM users WHERE id = ?";

  connection.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error!!!",
      });
    } else if (result.length === 0) {
      return res.status(500).json({
        message: "User not found!!!",
      });
    } else {
      return res.status(200).json({
        message: "Users is Found!!!",
        result: result[0],
      });
    }
  });
};
