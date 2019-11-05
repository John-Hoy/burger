const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");


let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use("/", routes);

app.listen(port);	
