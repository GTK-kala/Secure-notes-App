import connection from "../../config/db.js";

// UPDATE USER INFO
export const UpDateUser = (req, res) => {
  const { username, email, password } = req.body;
  const id = parseInt(req.params.id);

  let fields = [];
  let values = [];

  if (username) {
    fields.push("username = ?");
    values.push(username);
  }

  if (email) {
    fields.push("email = ?");
    values.push(email);
  }

  if (password) {
    fields.push("password = ?");
    values.push(password);
  }
  values.push(id);

  if (!id && !username && !email && !password) {
    return res.status(400).json({
      message: "Fill OUT THE ID !!!",
    });
  }

  const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;

  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err,
      });
    }
    res.status(200).json({
      message: "USER INFO UPDATED !!!",
      result: result,
    });
  });
};
