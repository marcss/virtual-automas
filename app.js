var bodyParser  = require("body-parser"),
    express     = require("express"),
    app         = express();
    // flash    = require("connect-flash");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
// app.use(flash());
// app.use(function(req, res, next){
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

app.get("/", function(req, res){
    res.render("index");
});

app.get("/:va", function(req, res){
   res.send("You have requested Automa for " + va); 
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Virtual Automas App RUNNING");
});