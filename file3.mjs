//scope----{}
// Scope chaining ---- =>{{{}}} 
// if (true){  //parent block
// let a=1;
// if (true){   //child block
//     let a=5;
//     if(true){   //grand child block
//         let a=6;
//         console.log(a);
//     }
// }
// }


// lexical scope
// It is a scope of a parent.[only one parent]
// if (true){  //parent block
// let a=1;
// if (true){   //child block
//     let a=5;
//     if(true){   //grand child block
//         let a=6;
//         console.log(a);
//     }
// }
// }


// setTimeout
// setTimeout(fun, delaytime)
// Function mean arrow function
// 1000 mean 1 sec
// setTimeout function will executes at last.

// console.log("a")
// setTimeout(()=>{
// console.log("this is setTimeout")
// },1000);
// console.log("b");


// Error handling
// let error =new Error("This is first error");
// throw error;

// callback function
// It is a function passsed into another function as an argument.
// let fun1=()=>{
// };
// let fun3=()=>{
// }
// let fun2=()=>{
// };
// fun2(fun1,fun3);//higher order function

// higher order function
// A function which takes arguments as function
// A function which return another function is called higher order function.


// JSON.stringify() =>string
// It  converts a javascript value to a javascript object Notation(JSON) string.
// let info={
//     name:"Priya",
//     age:22,
//     location:"ktm",
// };
// let info1=JSON.stringify(info);
// console.log(info1);


// JSON.parse()=> Converts a javascript object Notation(JSON)string into an object.
// let info='{"name":"Priya","age":22,"location":"ktm"}';
// let info1=JSON.parse(info);
// console.log(info1);




