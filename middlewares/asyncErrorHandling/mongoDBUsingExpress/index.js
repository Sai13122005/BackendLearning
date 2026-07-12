const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const Chat = require("./models/chat.js");
const ExpressError = require("./ExpressError.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
main().then(()=>{
    console.log("Connection successfull");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

// let chat1 = new chat(
//     {
//         from: "Sai",
//         to: "varun",
//         message: "Hi",
//         created_at : new Date()
//     }
// );
// chat1.save().then((res)=>{
//     console.log(res);
// })
app.listen(8080, ()=>
{
    console.log("server is listening on 8080");
});

app.get("/", (req, res)=>{
    res.send("Working");
});


// index route

app.get("/chats", async (req, res, next)=>{
   try{
     let chats = await Chat.find();
    //console.log(chats);
    res.render("index.ejs", {chats});
   }catch(err)
   {
     next(err);
   }
});

//new route

app.get("/chat/new", (req, res)=>{
    res.render("new.ejs");
});
//create route
app.post("/chats", async (req, res, next)=>{
    try
    {
        const { from, to, message } = req.body;
        const chat = new Chat({
            from,
            to,
            message,
            created_at: new Date()
        });
        await chat.save();
        res.redirect("/chats");
    }
    catch(err){
        next(err);
    }
})

//edit route

app.get("/chat/:id/edit", async (req, res, next)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }
    catch(err){
        next(err);
    }
});

//update route
app.put("/chat/:id", async (req, res, next)=>{
    try{
        let {id} = req.params;
        let {message} = req.body;
        await Chat.findByIdAndUpdate(id, {message: message},{runValidators: true, new : true});
        res.redirect("/chats");
    }
    catch(err)
    {
        next(err);
    }
});

//delete route
app.delete("/chat/:id", async(req, res, next)=>{
    try{
        let {id} = req.params;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    }
    catch(err)
    {
        next(err);
    }
});
function Asyncwrap(fn)
{
    return function(req, res, next)
    {
        fn(req, res, next).catch((err)=>next(err));
    }
}
//instead of using try-catch we can use Asyncwrap function as shown below, this can be used for all asynchronus functions
//show route
app.get("/chat/:id", Asyncwrap(async(req, res, next)=>{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat)
        {
            return next(new ExpressError(404, "Chat Not Found"));
        }
        res.send(chat.message);
    }
));
app.use((err, req, res, next)=>{
    let {status= 500, message = "Some Error"} = err;
    res.status(status).send(message);
})