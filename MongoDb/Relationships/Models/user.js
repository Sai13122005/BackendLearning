const mongoose = require("mongoose");

main().then(()=>{
    console.log("Connection to DB Success!");
}).catch(err=> console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationshipsDemo");
}

//implementation of one-to-few
const userSchema =new mongoose.Schema({
    username: String,
    address: [
        {
            _id: false,
            location:String,
            city: String

        },
    ],
})

const User = mongoose.model("User", userSchema);

const addUsers = async()=>{
    let user1 =  new User({
        username: "Saikrishna", 
        address: [{
            location: "University of Hyderabad",
            city: "Hyderabad"
        }]
    });
    user1.address.push({location: "Home", city : "Nimmapally"});
    let res = await user1.save();
    console.log(res);

}

addUsers();