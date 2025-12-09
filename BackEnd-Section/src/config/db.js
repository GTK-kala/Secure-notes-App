import path from "path";
import mysql2 from "mysql2";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, "../../.env") });

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
