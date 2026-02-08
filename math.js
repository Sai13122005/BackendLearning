//module.exports: it is object that exports the data to required file
// const sum = (a, b)=> a+b;
// const mul = (a, b)=> a*b;
// const sqr = (a)=> a*a;
// let obj ={
//     sum: sum,
//     mul: mul,
//     sqr : sqr
// };
// module.exports = obj;
//or

// module.exports = {
//     sum: sum,
//     mul: mul,
//     sqr : sqr
// };

//or
// module.exports.sum = (a, b)=> a+b;
// module.exports.mul = (a, b)=> a*b;
// module.exports.sqr = (a)=> a*a;

//or
// exports.sum = (a, b)=> a+b;
// exports.mul = (a, b)=> a*b;
// exports.sqr = (a)=> a*a;
//but exports = 5; is wrong it behaves like a normal variable not as object

//______________________exporting file to import using "import" instead of require________________________________
//in a project we can use either import or require don't use both for a good code
//eg
export const sum = (a, b)=> a+b;
export const mul = (a, b)=> a*b;
export const sqr = (a)=> a*a;