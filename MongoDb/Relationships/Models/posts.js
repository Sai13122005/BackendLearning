// example for one to squillion
const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection to DB Success!");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationshipsDemo");
}


const UserSchema = new mongoose.Schema({
    username: String,
    email: String
});

const PostSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "InstaUser",
    }
});

const InstaUser = mongoose.model("InstaUser", UserSchema);
const Post = mongoose.model("Post", PostSchema);

let addData = async()=>{
    let user1 = new InstaUser({
        username: "Saikrishna_13",
        email: "pentasaikrishn00@gmail.com",
    });
    let post1 = new Post({
        content: "First Post",
        likes: 8000,
    });
    post1.user = user1;

    await user1.save();
    await post1.save();
    console.log("Data Added!");
}
let getData = async ()=>{
    let result = await InstaUser.find({});
    let posts = await Post.find({});
    let resultWithPopulate = await Post.find({}).populate("user", "username"); // only to print username
    console.log(result);
    console.log(posts);
    console.log(resultWithPopulate[0]);

}
//addData();
getData();