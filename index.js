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

app.get("/", async (req, res) => {
  try{
  const result = await db.query("SELECT * FROM items ")
    const items = result.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
}catch(err){
  console.log(err)
}
});

app.post("/add", async (req, res) => {
  const add = req.body.newItem;
  try{
  await db.query("INSERT INTO items (title) values ($1)", [add]);
  res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const title = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try{
    await db.query("UPDATE items set title = $1 where id = $2", [title , id]);
    res.redirect("/"); 
  }catch(err){
    console.log(err);
  }
});

app.post("/delete", (req, res) => {console.log(req.body)});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
