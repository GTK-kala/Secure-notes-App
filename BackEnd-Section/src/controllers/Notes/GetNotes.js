import connection from "../../config/db.js";

// GET ALL NOTES
export const GetNotes = (req, res) => {
  const sql = "SELECT * FROM notes";
  connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "SERVER ERROR",
      });
    }
    res.status(200).json({
      message: "ALL NOTES DATA !!!",
      result: result,
    });
  });
};
