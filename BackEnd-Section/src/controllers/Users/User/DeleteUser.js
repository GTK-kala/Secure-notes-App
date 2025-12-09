import connection from "../../../config/db.js";

// DELETE USER FROM DATABASE
export const DeleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: "FILL OUT ID !!!",
    });
  }

  const sql = "DELETE FROM users WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err,
      });
    }
    res.status(200).json({
      message: `USER WITH ${id} ID IS DELETED FROM DATABASE !!!`,
      result: result,
    });
  });
};
