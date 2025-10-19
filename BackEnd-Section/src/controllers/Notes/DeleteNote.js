import connection from "../../config/db.js";

// DELETE NOTE BY ID
export const DeleteNote = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: "FILL OUT note_id !!!",
    });
  }

  const sql = "DELETE FROM notes WHERE note_id = ?";

  connection.query(sql, [id], (err) => {
    if (err) {
      return res.status(400).json({
        message: "SERVER ERROR!!!",
      });
     }
    res.status(200).json({
      message: `NOTE WITH THIS ID ${id} DELETED !!!`,
    });
  });
};
