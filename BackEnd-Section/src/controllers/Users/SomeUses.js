import connection from "../../config/db.js";

// GET SOME USERS INFO
export const SomeUsers = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!limit) {
    return res.status(400).json({
      message: "ADD LIMIT VALUE !!!",
    });
  }

  const sql = "SELECT * FROM users";

  connection.query(sql, (err, result) => {
    if (err) {
      return res.status().json({
        message: "SERVER ERROR !!!",
      });
    }
    res.status(200).json({
      message: "SOME USES INFO !!!",
      result : result.slice(0 , limit)
    });
  });
};
