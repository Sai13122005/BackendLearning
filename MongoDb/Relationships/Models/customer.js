const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection to DB Success!");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationshipsDemo");
}

const orderSchema = new mongoose.Schema({
    item: String,
    price: Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);
const addCustomers = async () => {
    let cust1 = new Customer(
        {
            name: "Saikrishna",
        });
    let order1 = await Order.findOne({ item: "popcorn" });
    let order2 = await Order.findOne({ item: "Samosa" });
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let res = await cust1.save();
    console.log(res);
}
const findCustomer = async()=>{
    let result = await Customer.find({});
    let resultWithPopulate = await Customer.find({}).populate("orders");
    //method populate is used to get details of actual orders data instead of only address
    console.log("Result: ", result);
    console.log("ResultWithPopulating: ", resultWithPopulate[0]);
}
//addCustomers();

findCustomer();
// const addOrders = async()=>{
//    let res =  await Order.insertMany([
//         {item: "Samosa", price: 20},
//         {item: "Chai", price: 10},
//         {item: "popcorn", price: 30}]
//     );
//     console.log(res);
// };
// addOrders();