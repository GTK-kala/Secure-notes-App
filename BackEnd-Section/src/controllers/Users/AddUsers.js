import connection from "../../config/db.js";

export const AddUsers = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      message: "please full fill the requirements",
    });
  }

  const sql = "INSERT INTO users (username , email , password) VALUE (? , ? , ?)";

  connection.query(sql, [username , email , password], (err) => {
    if (err) {
      return res.status(500).json({
        message: err,
      });
    }
    res.status(200).json({
      message: "Users is Added !!!",
    });
  });
};
