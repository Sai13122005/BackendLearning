const express = require("express");
const error1 = require("./Error1");
const Error1 = require("./Error1");
const app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log("Connected to 8080");
})
// app.use((req, res, next)=>{
//     console.log("This is middleware");
//     next();
// });
// app.use((req, res, next)=>{
//     console.log("This is 2 middleware");
//     next();
// })
//example by maker logger utility(morgon)
// app.use((req, res, next)=>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// });

//_______________________________________________
//this is another example of using middleware:
//this acts as authenticator for /api
    //middleware
    // app.use("/api", (req, res, next)=>{
    //     let {token} = req.query;
    //     if(token === "giveaccess")
    //     {
    //         return next();
    //     }
    //     res.send("ACCESS DENIED");
    // })


    // app.use("/api", (req, res)=>{
    //     res.send("data");
    // });


    //we can also pass multiple middlewares
    const checkToken = (req, res, next)=>{
        let {token} = req.query;
        if(token === "giveaccess")
        {
            return next();
        }
        throw new Error1(401,"ACCESS DENIED");
    }


    app.use("/api",checkToken, (req, res)=>{
        res.send("data");
    });
//_______________________________________________



app.get("/err", (req, res)=>{
    abc = abc;
});
app.get("/admin", (req, res)=>{
    throw new Error1(403, "Access to admin is Forbidden");
});
//error handling middleware(custom)
app.use((err, req, res, next)=>{
    console.log("====ERROR====");
    let {status = 500, message = "SOME ERROR"} = err;
    // res.send(err);
    res.status(status).send(message);           
});
// app.use((err, req, res, next)=>{
//     console.log("====ERROR2 ====");
//     next(err);
// });
app.get("/", (req, res)=>{
    res.send("this is root");
});




