import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = []

app.get("/", (req, res) => {
  try{
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
}catch(err){
  console.log(err)
}
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", (req, res) => {console.log(req.body)});

app.post("/delete", (req, res) => {console.log(req.body)});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
