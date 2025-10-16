import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "notes_db",
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("DataBase connected !!!");
});

export default connection;