// const {faker} = require("@faker-js/faker");
// let createRandomUser = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }
// console.log(createRandomUser());

// _________________________________________________________________________________________________________

// generating fake data using faker package
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'web',
  password: 'Saikrishna1312@'
});
//to coonect there should be database

//to get a result of a query
// let q = "Show Tables";
// try
// {
//   connection.query(q, (err, result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// }
// catch(err){
//   console.log(err);
// }


//Inserting new data using node
// let q = "Insert into user values(?, ? , ? , ?)";
// let user = ["123", "123_user", "abc@gmail.com", "123"];
// try
// {
//   connection.query(q, user, (err, result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// }
// catch(err){
//   console.log(err);
// }

// connection.end();

// inserting multiple users:

// let q = "Insert into user values ?";
// let users = [["12", "123_userb", "abcb@gmail.com", "123b"], ["126", "123_usera", "abca@gmail.com", "123a"]];
// try
// {
//   connection.query(q, [users], (err, result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// }
// catch(err){
//   console.log(err);
// }

// connection.end();



// ___________inserting in bulk using faker__________________________


// const {faker} = require("@faker-js/faker");
// let getRandomUser = ()=> {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }
// let q = "INSERT INTO `user` VALUES ?";
// let data = [];
// for (let i = 0; i < 10; i++) {
//     data.push(getRandomUser());
// }
// try {
//     // note: the parameter array must itself be wrapped in another array so that
//     // mysql2 interpolates the whole list of rows correctly
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();
// ___________________________________ROUTING_________________________________________________________________
// GET: / -> show no.of users in DB
// GET: /user -> show users(id, username, email) (using ejs)
// PATCH: /user/:id -> edit username
// POST: /user -> add new user
// DELETE: /user/:id -> delete user

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const method_override = require("method-override");
const console = require('console');
app.use(method_override("_method"));
app.use(express.urlencoded({extended: true}));
app.listen(port, ()=>{
  console.log("listening");
});

app.get("/", (req, res)=>{
  let q = "SELECT COUNT(*) from user";
  try{
    connection.query(q, (err, result)=>{
      if(err)throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", {count});
    });
  }
  catch(err)
  {
    res.send("error in Database");  
  }
});

// _____________FETCH users using get____________

app.get("/users", (req, res)=>{
    let q = "SELECT id, username, email from user";
    try{
      connection.query(q, (err, result)=>{
          if(err) throw err;
          res.render("users.ejs", {result});
      });
    }
    catch(err){
        res.send("Error in Database");
    }
});

//__________________________edit form _________________________
app.get("/user/:id/edit", (req, res)=>{
  let {id} = req.params;
  // parameterized query
  let q = `SELECT * FROM user WHERE id = ?`;
  try{
    connection.query(q, [id], (err, result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  }
  catch(err){
    res.send("Error in Database");
  }
});

//to edit we have to use patch request so that we should use method_override package
// ________________update DB_______________________

app.patch("/user/:id", (req, res)=>{
  let {id} = req.params;
  let {password : formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = ?`;
  try{
    connection.query(q, [id], (err, result)=>{
      if(err) throw err;
      let user = result[0];
      if(user.password != formPass)
      {
        res.send("Wrong Password");
      }
      else{
        // use parameterized query to avoid SQL syntax errors and injection
        let q2 = `UPDATE user SET username = ? WHERE id = ?`;
          connection.query(q2, [newUsername, id], (err, result)=>{
            if(err) throw err;
            //console.log(result);
            res.redirect("http://localhost:8080/users");
          });
          
      }
    });
  }
  catch(err){
    res.send("Error in Database");
  }
});
