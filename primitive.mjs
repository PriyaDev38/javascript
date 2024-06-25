// primitive and non-primitive data types

// primitive ---call by value
// String, number, boolean, null, undefined

// let name="priya"
// console.log(typeof (name))

// let rollnumber=40
// console.log(typeof (rollnumber))



// non-primitive or reference datatypes---call by refernces
// Array, object, function

// let input=['priya', 'Dev']
// console.log(typeof (input))

// Set-----remove duplicate number
// let ar1=[1,2,2,3,45,4,76.0]
// let ar2=[...new Set(ar1)];
// console.log(ar2)

// let input=["priya", "Dev","Dev"]
// let input1=[...new Set(input)];
// console.log(input1)


// In javascript, a primitive datatype is a data that is not an object and has no methods or properties. 


// Ternary Operator---Synax; (condition)? true :false

// This is if else condition
// let age=20;
// if (age>18){
//     console.log("you can drive")
// }
// else{
//     console.log("you cannot drive")
// }

//  This above in ternary operator form
// let age=7
// let canDrive= age>18? "you can drive": "you can't drive"
// console.log(canDrive)


// logical Operator
// &&,||----And Operator, or Operator
// In And operator, if there is false then result came in false
// like true and true is true, true and false is false , false and false is false
// let name=true
// let isAdmin=true
// if (name&& isAdmin){
//     console.log("priya")
// }else{
//     console.log("Oedz")
// }

// In or operator, if there is true then result came in true
// like true and true is true, true and false is true 
// let name=true
// let isAdmin=false
// if (name|| isAdmin){
//     console.log("priya")
// }else{
//     console.log("Oedz")
// }