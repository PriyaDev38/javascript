// Get the total value of array of object price.

// let list=[
//     {name:"mobile", price:10000},
//     {name:"battery", price:8000},
//     {name:"earphone", price:5000},
//     {name:"charger", price:2000},
// ];

// let output= list.map((value, index)=>{
//     return value.price;
//      });
//     console.log(output);

// let newinput=output.reduce((previous, current)=>{
//     return previous+current;
// },0);
// console.log(newinput);

// sort the array according to price

// let list=[
//         {name:"mobile", price:10000},
//         {name:"battery", price:8000},
//         {name:"earphone", price:5000},
//         {name:"charger", price:2000},
//     ];

//    let input= list.sort((a,b)=>{
//     return a.price-b.price;
//    });

//    console.log(input);

// find the name of the arry in ondragover.
// let list=[
//         {name:"mobile", price:10000},
//         {name:"battery", price:8000},
//         {name:"earphone", price:5000},
//         {name:"charger", price:2000},
//     ];

//    let input= list.map((value,index)=>{
//     return value.name
//    });

//    console.log(input);

// let output=input.sort();
// console.log(output)

// Make a arrow function,
// if age is 25, console your ticket is free.
// if age is 26, console your ticket is 100.
// if age is other than 25, 26.
// console you are not allowed.

// let input=(age)=>{
//     if(age===25){
//         console.log("your ticket is free");
//     }
//     else if(age===26){
//         console.log("your ticket is 100");
//     }
//     else {
//         console.log("you are not allowed");
//     }
// };
// input(25)

// make an arrow function named sum(num1, num2)
// pass 2 input, and it must return the sum of num1 and num2 is num3.
// Here num1, num2, and num3 is number, do this by using string literals.

// let sum=(num1, num2)=>{
// let num3=`the sum of ${num1} and ${num2} is ${num1+num2}`;
// console.log(num3)
// };
// sum(3,4);

// make an arrow function,
// pass array of fruits, the function must return "the fruits contains apple"
// if the array contain apple.
// else return "the fruits doesn't contain apple".

// let input =(Fruits)=>{

//        if (Fruits.includes("Apple")){
//                 console.log("the fruits contain Apple");

//             }
//             else {
//                 console.log("the fruits doesn't contain Apple");
//             }

//         };
//         input(["Guava","Orange","Apple"])

/*show a product whose price is greater than 2000

[
    'MacBook Pro cost NRs. 100000 and its category is Laptops',
    'Nike cost NRs. 5000 and its category is Running Shoes',
    'Dell XPS cost NRs. 120000 and its category is Laptops'
  ]  */

// const products = [
//   {
//     id: 1,
//     title: "MacBook Pro",
//     category: "Laptops",
//     price: 100000.0,
//     description: "A high-performance laptop.",
//     manufactureDate: "2023-05-15T08:30:00",
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     title: "Nike",
//     category: "Running Shoes",
//     price: 5000,
//     description: "Running shoes designed for speed and comfort.",
//     manufactureDate: "2023-02-20T14:45:00",
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     title: "Python",
//     category: "Books",
//     price: 500,
//     description: "A language for AI",
//     manufactureDate: "1925-04-10T10:10:00",
//     isAvailable: false,
//   },
//   {
//     id: 4,
//     title: "Javascript",
//     category: "Books",
//     price: 700,
//     description: "A language for Browser",
//     manufactureDate: "1995-12-04T12:00:00",
//     isAvailable: false,
//   },
//   {
//     id: 5,
//     title: "Dell XPS",
//     category: "Laptops",
//     price: 120000.0,
//     description: "An ultra-slim laptop with powerful performance.",
//     manufactureDate: "2023-04-25T09:15:00",
//     isAvailable: true,
//   },
// ];

// let output = products
//   .filter((value, index) => {
//     return value.price > 2000;
//   })
//   .map((value, index) => {
//     console.log(
//       `${value.title} cost NRs. ${value.price} and its category is ${value.category}`
//     );
//   });
