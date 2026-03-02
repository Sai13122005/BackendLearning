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

let q = "Insert into user values ?";
let users = [["12", "123_userb", "abcb@gmail.com", "123b"], ["126", "123_usera", "abca@gmail.com", "123a"]];
try
{
  connection.query(q, [users], (err, result)=>{
    if(err) throw err;
    console.log(result);
  });
}
catch(err){
  console.log(err);
}

connection.end();





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

