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

//middleware to handling deletion
// customerSchema.pre("findOneAndDelete", ()=>{
//     console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer)=>{
    if(customer.orders.length > 0)
    {
        let res = await Order.deleteMany({_id:{$in: customer.orders}});
        console.log(res);
    }
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

//findCustomer();
const addOrders = async()=>{
   let res =  await Order.insertMany([
        {item: "Samosa", price: 20},
        {item: "Chai", price: 10},
        {item: "popcorn", price: 30}]
    );
    console.log(res);
};
//addOrders();

const addData = async ()=>{
    const newOrder = new Order({item: "Ice Cream", price: 90});
    const newCus = new Customer({
        name: "Ram"
    });
    newCus.orders.push(newOrder);
    await newCus.save();
    await newOrder.save();
    console.log("New Customer is added")
}

//addData();

const deleteData = async ()=>{
    const data = await Customer.findByIdAndDelete('6a5e134a338cd52f5c63296d');
    console.log(data);
}
deleteData();