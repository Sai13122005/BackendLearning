const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("Connection successfull");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
        from: "Sai",
        to: "varun",
        message: "Hi",
        created_at : new Date()
    },
    {
        from: "Sai",
        to: "vamshi",
        message: "hello",
        created_at : new Date()
    },
    {
        from: "Sai",
        to: "venky",
        message: "namaste",
        created_at : new Date()
    },
    {
        from: "Sai",
        to: "Ram",
        message: "hi",
        created_at : new Date()
    }
];

Chat.insertMany(allChats);