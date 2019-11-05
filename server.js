const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");


let app = express();

const PORT = process.env.PORT || 3000;

// static server content
app.use(express.static("public"));

// body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes
app.use (routes);

app.listen(PORT, function(){
        console.log(`Server listening on port ${PORT}`);
});	