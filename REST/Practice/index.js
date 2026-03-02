const express = require("express");
const app = express();
const port = "8080";
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, ()=>
{
    console.log(`${port} is listening`);
});
app.get("/instagram/", (req, res)=>
{   
    res.render("home.ejs");
    //res.send("It is landing page");
});
app.get("/instagram/sign_in", (req, res)=>
{   
    res.render("sign_in.ejs");
    //res.send("It is landing page");
});
app.post("/instagram/sign_in", (req, res)=>{
    console.log(req.body);
});