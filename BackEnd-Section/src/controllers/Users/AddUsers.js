import bcrypt from "bcryptjs";
import connection from "../../config/db.js";

// ADD USERS INFO INTO DATABASE
export const AddUsers = (req, res) => {
  const { username, email, password } = req.body;

  const sql1 = "SELECT * FROM users WHERE email = ?";
  connection.query(sql1, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error!!!",
      });
    }
    if (result.length > 0) {
      return res.status(400).json({
        message: "Email already exists!!!",
      });
    }

    const HashPassword = bcrypt.hashSync(password, 8);
    const sql2 =
      "INSERT INTO users (username , email , password) VALUES (? , ? , ?)";

    connection.query(sql2, [username, email, HashPassword], (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Server Error!!!",
        });
      }
      res.status(200).json({
        message: "User registered successfully",
      });
    });
  });
};
