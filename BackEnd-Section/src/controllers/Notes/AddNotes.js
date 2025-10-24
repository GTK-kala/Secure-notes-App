import connection from "../../config/db.js";

// ADD NOTES TO DATABASE
export const AddNotes = (req, res) => {
  try {
    const user_id  = parseInt(req.body.user_id)
    const { title, body, pinned, tags } = req.body;
    if (!user_id || !title) {
      return res
        .status(400)
        .json({ message: "User ID and Title are required" });
    }

    const sql = `
      INSERT INTO notes (user_id, title, body, pinned, tags)
      VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(sql, [
      user_id,
      title,
      body || "",
      pinned || false,
      tags || "",
    ]);

    res.status(201).json({
      message: "Note added successfully",
    });
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({
      message: "Server error while adding note",
    });
  }
};
