// REST: Representational State Transfer
//     REST is an architectural style that defines a set of constraints to be used for creating web services
// CRUD Operations:
//     GET: retreive resources(read)
//     POST: submit new data to the server(create)
//     PUT: update existing data
//     PATCH : updata existing data partially
//     DELETE: remove data
//  https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
const express = require("express");
const app = express();
//for method-override
const methodOverride= require("method-override");
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid");//to generate ids we can use uuid package(universally unique identifier)
app.use(express.urlencoded({extended:  true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.use(methodOverride('_method'));//we can write anything instead of _method
app.listen(port, ()=>{
    console.log(`Listen on ${port}`);
});

// use an array of posts (quora web model) instead of database
let posts = [
    {
        id: uuidv4(),
        username: "Saikrishna",
        content:  "This is Saikrishna"
    },
    {
        id: uuidv4(),
        username: "Ram",
        content:  `this is Ram`
    },
    {
        id: uuidv4(),
        username: "Ravi",
        content:  "this is Ravi"
    },
    {
        id: uuidv4(),
        username: "varun",
        content:  "this is varun"
    }
];

app.get("/posts", (req, res)=>{//to see the posts in quora
    //res.send("Hello");
    res.render("index.ejs", {posts});
});

// to add new post:
    //          1) data taken by a form is shared with backend using GET
    //          2) that post (data) is addded to database (here array) using POST

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});
app.post("/posts", (req, res)=>{
   let {username, content} = req.body;
   let id = uuidv4();
   posts.push({id,username, content});
  // res.send("Post Done");
  res.redirect("/posts"); // by default it is get request for /posts
});
//to see particular account posts:
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> (p.id === id));
    //console.log(post);
    res.render("show.ejs", {post});
});

//to update a route (for that we use patch/put)
app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> (p.id === id));
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id",(req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> (p.id === id));
    post.content = req.body.content;
    res.redirect("/posts");
    // console.log(post);
    //res.send("patch is working");
} );
app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    // let post = posts.find((p)=> (p.id === id));
    // posts.splice(posts.indexOf(post), 1);
    posts = posts.filter((p)=> p.id !== id);
    //res.send("delete success");
    res.redirect("/posts");
});
// we can send only post and get req through html form we couldn't send patch, delete reqs -->
// <!-- for patch req we have to use a npm package which is (method_override) to override a given method to required method 






