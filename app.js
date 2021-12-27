const express = require("express");
const app = express();
const path = require("path");

const index = require("./routes/indexRoute");

/*MIDDLEWARES*/
app.use(express.static("./public"));

/**VIEWS*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* ENRUTADORES*/
app.use("/", index);


app.listen(3000, () => {
  console.log("server flies on port 3000");
});
