const express = require("express");
const app = express();
const users = require("./routers/user.js");
const posts = require("./routers/post.js"); 
const cookieParser = require("cookie-parser");



// to set cookies
app.get("/getcookies", (req, res)=>
{   
    res.cookie("FirstCookie", "Saikrishna");
    res.cookie("SecondCookie", "Nagesh");
    res.send("Sent some cookies");
});

app.use(cookieParser("1234!@$%#^$#%@$")); //to parse cookies
//to access cookies from another route is using req.cookies
//  but we need to use a middleware(npm package) to parse it
//we can add cookie from browser
app.get("/", (req, res)=>{
    console.log(req.cookies);
    res.send("This is root!");
});
app.get("/greet", (req, res)=>{
    let {name = "Anonymous"} = req.cookies;
    res.send(`Hi,${name} `);
});

app.get("/getSignedCookies", (req, res)=>{
    res.cookie("password", "Sai12345@", {signed: true});
    res.send("sent signed cookie");
});

app.get("/verify", (req, res)=>{
    //res.send(req.cookies);//for unsigned cookies
    res.send(req.signedCookies);
});

//if we change signedcookie in browser, we can't access it , it returns empty
// the below commented code is without using express router

// app.get("/users", (req,res)=>{
//     res.send("GET for users");
// })
// app.get("/users/:id", (req, res)=>{
//     res.send("GET for user id");
// });
// app.post("/users", (req, res)=>{
//     res.send("POST for user");
// });
// app.delete("/users/:id", (req, res)=>{
//     res.send("Delete for user id");
// });
// app.get("/posts", (req,res)=>{
//     res.send("GET for posts");
// })
// app.get("/posts/:id", (req, res)=>{
//     res.send("GET for post id");
// });
// app.post("/posts", (req, res)=>{
//     res.send("POST for post");
// });
// app.delete("/posts/:id", (req, res)=>{
//     res.send("Delete for post id");
// });

//with using express router
app.use("/users", users);
app.use("/posts", posts);
app.listen(3000, ()=>
{
    console.log("Server is running on 3000");
});