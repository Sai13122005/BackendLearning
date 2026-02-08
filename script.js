// let person = 'Saikrishna';
// for(let i = 0; i < 5; i++)
// {
//     console.log(person);
// }
//it is ssample file to run it in node environment
//in node to run a js file :
//command: node <file_name>

//__________________________________________________________
// to give input for a program we use process.argv
// let sum = 0;
// let args = process.argv;
// for(let i = 2; i < args.length; i++)
// {
//     sum+= parseInt(args[i]);
// }
// console.log('Sum of given in numbers:', sum);

// __________________________________________________________________________________
// module.exports: it is object that exports the data to required file
// require("<filename to be exported>") is used in importing file to get that data 
// eg importing from math.js
// let o  = require("./math");
// console.log("sum of two number:", o.sum(6,9));
// console.log("mul of two number:", o.mul(6,9));
// console.log("sqr of two number:", o.sqr(6));

//to import from another directory

// const fruits = require('./fruits'); // imported from index.js
// console.log(fruits);

//importing from a package that was downloaded using npm using "require"
// const figlet = require('./figlet/node_modules/figlet');
// //console.log(figlet);
// figlet("Saikrishna", function(err, data){
//     if(err)
//     {
//         console.log("something went Wrong");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });
//to use require in package.json file type should be CommonJs
// __________________________________________________________________________________
//importing form a file that was created by us
// import {sum , sqr} from "./math.js";
// console.log(sum(1, 9));
// console.log(sqr(3));


//importing from a package that was downloaded using npm using "import"
// import { generate } from "random-words";
// console.log(generate());
//to use require in package.json file type should be module


