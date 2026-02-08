const express = require('express');
const app = express();//it is act like a server side app(object)
//console.dir(app);
let port = 3000;
//ports are the logical endpoints of a network connection 
//that is used to exchange information b/w a web server and a web client
//listen for listen request
//it used to start server
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})
//"use" to handling request
// app.use((req, res)=>{
//     //console.log(req)//it is a object
//     console.log("request received");
//     //res also a object
//     //res.send("this is the required response");
//     // res.send({
//     //     name: "Saikrishna",
//     //     age: "20"
//     // });
//     //through res we can send object, html tag, array, etc
//     let code ="<h1>Fruits</h1> <ul><li>apple</li><li>banana</li><li>mango</li></ul>"; 
//     res.send(code);
// });

//to send request through hoppscotch we have to add a extension in chrome
//http request is in text formatt but express converts the request as a object (parsing)


//_________________________________________Routing___________________________
// it is process of selecting a path for traffic in a network or between or across multiple networks
//"use" send same response for all route 
// //but "get" send different respnses based on routes
// app.get("/animals", (req, res)=>{
//     let htmlCode = "<h1>Animals</h1> <ul><li>Lions</li><li>Monkeys</li><li>Elephants</li></ul>"
//     res.send(htmlCode);
// })
// //we can send one response for a path
// app.get("/apple", (req, res)=>{
//     res.send("This is apple");
// });

// app.get("/mango", (req, res)=>{
//     res.send("This is mango");
// });
// app.get("/banana", (req, res)=>{
//     res.send("This is banana");
// });
// app.get("/custurdApple", (req, res)=>{
//     res.send("This is custurd apple");
// });

// * is in case no one of above will send then this * one's response is sent
//but this is not working in latest version of express
// app.get("*", (req, res)=>
// {
//     res.send("this path does not exit");
// });
//instead (it should be last)
// app.use((req, res)=>{
//     res.status(404).send("Page Not Found!");
// });
//paramter in path (we should use :)
app.get("/:username/:pass", (req, res)=>{
    console.log(req.params);
    res.send(`Username: ${req.params.username}`);
})

//using of Query Strings
//by query strings we send more information through request
app.get("/search", (req, res)=>{
    let {q} = req.query;
    res.send(`Search result for query :${q}`);
})
