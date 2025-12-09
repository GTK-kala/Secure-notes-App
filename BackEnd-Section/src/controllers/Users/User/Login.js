import connection from "../../../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  connection.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error!!!",
      });
    }
    if (result.length === 0) {
      return res.status(400).json({
        message: "email or password invalid",
      });
    }
    const user = result[0];
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "email or password invalid",
      });
    }
    const cookie = {
      httpsOnly: true,
      secure: false,
      sameSite: "Lax",
    };
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_Expire || "1d" }
    );

    res.status(200).cookie("token", token, cookie).json({
      message: "Login successful",
    });
  });
};
