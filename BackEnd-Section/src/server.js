import express from "express";
import cors from "cors";
import  route  from "./routes/routes.js";


const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}))

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is Running on port ${port}`);
});

app.use('/api' , route)