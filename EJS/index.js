const express = require("express");
const app = express();
let port = 2202;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res)=>{
    res.render("home");//express by default it search the file in the "views" folder
    //also we can write without extension "home" or "home.ejs"
     //here render is using to send a file instead of a string/array/html tags
});
//we can also download ejs extension in vs code which highlights keywords
 //here to we have to render .ejs file which are generally stored in views folder

 //____________________________________________
 /*we can start server and send a response from server from parent any directory by giving full path
    command eg: nodemon /path/index.js
    but it fails for render 
    express will not found views directory as it searche views directory in directory where we run the server
    (Error: Failed to lookup view "home" in views directory "C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\views"
    at app.render (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\express\lib\application.js:562:17)
    at ServerResponse.render (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\express\lib\response.js:923:7)
    at C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\index.js:6:9
    at Layer.handleRequest (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\lib\layer.js:152:17)
    at next (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\lib\route.js:117:3)
    at handle (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\index.js:435:11)
    at Layer.handleRequest (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\lib\layer.js:152:17)
    at C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\index.js:295:15
    at processParams (C:\Users\MEDHA TRUST\OneDrive\Desktop\WEB\NodeJs\EJS\node_modules\router\index.js:582:12)) it gives this error*/
    //to overcome this 
    // we have to add 
    //const path = require("path");
    //app.set("views", path.join(__dirname, "/views"));
//_______________________________________________________

app.get("/hello", (req, res)=>{
    res.send("Hello");
})
app.listen(port, ()=>
{
    console.log(`app is listening in ${port}`);
});

app.get("/rolldice", (req, res)=>{
    //let us assume the data from database
    //then we have give a Object as an argument
    let rollFromDatabase =  Math.floor(Math.random()*6)+1;
    res.render("rollDice", {num: rollFromDatabase});
});