const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));// this is to make express to understand body data when post request is sent
app.use(express.json()); //this is to send json data into the req body of post
app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});
app.get("/register", (req, res)=>{
    let {user, pass} = req.query;
    res.send(`Standard get response, Welcome ${user}`);
});
app.post("/register", (req, res)=>{
    //console.log(req.body);
    let {user, pass} = req.body;
    res.send(`Standard post response welcome ${user}`);
});