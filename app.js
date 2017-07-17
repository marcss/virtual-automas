var bodyParser  = require("body-parser"),
    express     = require("express"),
    app         = express(),
    automas     = require("./data/automa-data");
    // flash    = require("connect-flash");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


// app.use(flash());
// app.use(function(req, res, next){
    // res.locals.automas = automas;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

app.get("/", function(req, res){
    res.render("index", {automas: automas});
});

app.get("/:g", function(req, res){
    for(var i = 0; i < automas.length; i++) {
        if(automas[i].ref === req.params.g) {
            res.redirect(302, automas[i].url);
        }
        // } else {
        //     var g = req.params.g;
        //     g = g.replace(/-/g, ' ');
        //     var apology = "<p>You have requested Automa for: </p>";
        //     apology += "<p><span class=\"vaname\">" + g + "</span>. </p>";
        //     apology += "<p>Unfortunately, we have not yet captured this Automa. Sorry.</p>";
        //     // res.send(apology);
        //     res.render("runautoma", { apology : apology });

        // }
    }
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Virtual Automas App RUNNING");
});