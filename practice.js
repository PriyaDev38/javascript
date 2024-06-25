// console.log("I am Priya")

// console.log(5+6)
// console.log(6*2)

// console.log("a"+"b")
// console.log("a" + 'b')

// console.log("Priya")
// console.log('I am priya')
// console.log(`I am priya deV`)

/* 
fhhbdmnbvm
bxcn ncd */

// Javascript is a asynchronous and single threaded language
// option+shift and A is for comment all lines 

/*  */

// Variable is of 3 types: var, let and Cons
// let name ="Priya"
// console.log(name)

// let address="Rajbiraj"
// console.log(address)

// let age="60"
// console.log(age)

// let age="10"
// age="20"
// console.log(age)

// let num1=4;
// let num2=5;
// console.log(num1+num2);

// let num1=5;
// let num2=6;
// console.log(`sum of ${num1}`);


// let a = "Oedz"
// console.log(a);

// let a ="Priya";
// console.log(a);

// console.log(1+2+"4");

// let num1=1;
// let num2=2;
// let message=`${num1}`;
// console.log(message);

// let num1=1;
// let num2=2;
// let message=`${num1}`;
// let sum=`the sum of ${num1} and ${num2} is ${num1+num2}`;
// console.log(message);console.log(sum);


// let num1=1;
// let num2=2;
// let message=`${num1}`;
// let sum=`the sum of ${num1} and ${num2} is ${num1+num2}`;
// console.log(message);console.log(sum);

// export let list=[1,2,3,4];
//  let output= list.map((value, index)=>{
// return value*2;
//  });
// console.log(output);

// let fun1=(inputArr)=>{
//     let output=inputArr.map((value, index)=>{
//         return value*2;
//     });
//     return output;
// };

// Create an object called "person"
let person = {
    // Properties (data)
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  
    // Methods (functions)
    greet: function() {
      console.log("Hello, my name is " + this.name);
    },
    getAge: function() {
      return this.age;
    }
  };
  
  // Accessing properties
  console.log(person.name); // Output: John Doe
  console.log(person.age); // Output: 30
  
  // Calling methods
  person.greet(); // Output: Hello, my name is John Doe
  console.log(person.getAge()); // Output: 30
  
  // Creating another object called "student"
  let student = {
    name: "Jane Smith",
    grade: 90,
    courses: ["Math", "Science", "English"],
  
    // Method to calculate average grade
    getAverageGrade: function() {
      return this.grade / this.courses.length;
    }
  };
  
  console.log(student.name); // Output: Jane Smith
  console.log(student.courses); // Output: ["Math", "Science", "English"]
  console.log(student.getAverageGrade()); // Output: 30