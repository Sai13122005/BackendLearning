const express = require("express");
const app = express();
const port = 2002;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});
app.get("/ig", (req, res)=>{
    res.render("Home.ejs");
})
app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data)
    {
        res.render("Instagram.ejs", {data});
    }
    else{
        res.render("error");
    }
});
