const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main().then(()=>
{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
});

const bookSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type:String,
    },
    price: {
        type: Number,
        // min : 1,
        min : [1, "Price is Too low"],//custom error
    },
    discount:{
        type: Number,
        default : 0,
    },
    category:{
        type: String,
        enum: ["fiction", "non-fiction"],
    }
});

const Book = mongoose.model("Book", bookSchema);


// book1 = new Book({
//     title: "ABC",
//     author: "XYZ",
//     price: 50,
// });

// book1.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
// book2 = new Book({
//     title: "BC",
//     author: "YZ",
//     price: -2,
// });

// book2.save().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("69cc074a7340230001cbdea7", {price: 100}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});

Book.find().then((data)=>{
    console.log(data);
});

