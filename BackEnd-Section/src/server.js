import cors from "cors";
import express from "express";
import route from "./routes/routes.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is Running on port ${port}`);
});

app.use("/api", route);
