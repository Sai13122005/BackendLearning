//before connection , check whether the mongodb server is running

const mongoose = require("mongoose");
//for documentation of mongoose: https://mongoosejs.com/docs/
main()
    .then(()=>
    {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');// test is the database name, it can be the name of db what we want to connect

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}