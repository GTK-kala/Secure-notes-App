import connection from "../config/db.js";

export const AddUsers = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  if (!user) {
    return res.status(400).json({
      message: "Add user info !!!",
    });
  }

  res.status(200).json({
    message: "user Added to The Database !!!",
    result: user,
  });
};
