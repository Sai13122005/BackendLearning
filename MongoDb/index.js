
//while reading or revising this make sure use new db
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

//Schema for a doc within a collection
const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    age: Number
})

//model in mongoose is a class with which we construct documents

const User = mongoose.model("User", userSchema);
//here User is name of collection
//but in mongodb it's name converted into users(lower case and plural)


//insertOne

//User model is a class
// const user2 = new User({
//     name: "Saipavan",
//     email: "Saipavan@gmail.com",
//     age: 20
// });

//it returns promise so we can use then
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//insertMany 
//it also retuns promise

// User.insertMany([
//     {
//         name: "Raju",
//         email: "Raju@gmail.com",
//         age: 19
//     },
//     {
//         name: "Ravi",
//         email: "Ravi@gmail.com",
//         age: 19
//     },
//     {
//         name: "shyam",
//         email: "shyam@gmail.com",
//         age: 19
//     },
//     {
//         name: "varun",
//         email: "varun@gmail.com",
//         age: 18
//     }
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });



//find()


//User.find({});//it returns query object not promise
//mongoose queries  are not promises . but they have a .then()


// User.find().then((data)=>{
//     console.log(data);
// }).catch((err)=>
// {
//     console.log(err);
// })



// User.find({age: {$gte : 20}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>
// {
//     console.log(err);
// })
//to print first person name
// User.find({age: {$gte : 20}}).then((data)=>{
//     console.log(data[0].name);
// }).catch((err)=>
// {
//     console.log(err);
// })


//findOne()

// User.findOne().then((data)=>{
//     console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// });



// User.findOne({age: {$gte: 40}}).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// });


//using id

// User.findOne({_id:'69baf4f23719a8f825639138' }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// });

//we can use findById()

// User.findById('69baf4f23719a8f825639138').then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });


//Update:
//it returns query object not promise
//mongoose queries  are not promises . but they have a .then()

//* updateOne(<filter>, <updation>)

// User.updateOne({name: "SaiKrishna"}, {age: 50}).then((res)=>{
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });

// User.updateMany({age: {$lte: 10}}, {age: 18}).then((res)=>{
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });

//we can use findOneAndUpdate(condition, update, option)


// User.findOneAndUpdate({name: "Ravi"}, {age: 40}).then((res)=>{
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });

//in above it doesn't print modified result but we can in mongo shell
// to print updated value we should add option called {returnDocument: 'after'}   {new : true} is outdated

// User.findOneAndUpdate({name: "shyam"}, {age: 30}, {returnDocument: 'after'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });




// User.findByIdAndUpdate("69baf793bf15d1a7d046d914", {age: 2}, {returnDocument: 'after'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// });


// User.deleteMany({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.deleteOne({name: "varun"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });



//to print what were deleted:

// User.findOneAndDelete({name: "shyam"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndDelete("69bea4b867cf52278baf3157")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


