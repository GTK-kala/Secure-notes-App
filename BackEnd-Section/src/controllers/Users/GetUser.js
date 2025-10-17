import connection from "../../config/db.js";

// GET USER BY ID
export const GetUser = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).json({
      message: "PLEASE INSERT ID !!!",
    });
  }

  const sql = "SELECT * FROM users WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "ERROR on SERVER !!!",
      });
    }
    res.status(200).json({
      message: "USER INFO",
      result: result,
    });
  });
};
