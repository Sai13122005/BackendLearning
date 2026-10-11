const express  = require("express");
const session  =require("express-session");
const ejs = require("ejs");
const app = express();
const path = require("path");
const flash = require("connect-flash");// The connect-flash npm package is an Express.js middleware used to store temporary messages in a user's session,
// which are automatically cleared immediately after they are displayed
const sessionOptions = {
    secret: "134@$%#^$@&^%&*Q#R$WEF@#^&*T",
    resave: false,
    saveUninitialized: true
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});
app.get("/test", (req, res)=>{
    res.send("Tested");
});

app.get("/register", (req, res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    //res.send(`${name}`);
    if(name=== "anonymous")
    {
        req.flash("error", "user not registered");
    }else{
        req.flash("success", "user registered");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    //In Express.js, locals refers to objects used to store variables 
    // that you want to share across your application or make available to your HTML templates/views
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error");
    //also we can use another method to access above messages using middlewares
    res.render("page.ejs", {name: req.session.name}); //message passing using locals
    //res.render("page.ejs", {name: req.session.name, msg: req.flash("success")});
})

// app.get("/reqCount", (req, res)=>{
//     if(req.session.count)
//     {
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} time`);
// })
app.listen(3000, ()=>{
    console.log("running on 3000");
});