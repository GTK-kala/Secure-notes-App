import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("DataBase connected !!!");
});

export default connection;
