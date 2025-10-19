import connection from "../../config/db.js";

// UPDATE NOTE
export const UpDateNote = (req, res) => {
  const { title, body, pinned, tags } = req.body;
  const id = parseInt(req.params.id);
  const value = [];
  const field = [];

  if (title) {
    value.push(title);
    field.push("title = ?");
  }
  if (body) {
    value.push(body);
    field.push("body = ?");
  }
  if (pinned) {
    value.push(pinned);
    field.push("pinned = ?");
  }
  if (tags) {
    value.push(tags);
    field.push("tags = ?");
  }
  value.push(id);

  if (!id && !tags && !title && !body && !pinned) {
    return res.status(400).json({
      message: "Fill OUT THE VALUES !!!",
    });
  }

  const sql = `UPDATE notes SET ${field.join(", ")} WHERE note_id = ?`;

  connection.query(sql, value, (err) => {
    if (err) {
      return res.status(500).json({
        message: err,
      });
    }
    res.status(200).json({
      message: "NOTE IS UPDATED !!!",
    });
  });
};
