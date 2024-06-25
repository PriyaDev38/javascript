// datatypes
// number - 1,2,3,4
// string -"N9solution",'N9solution'
// boolean- True or falsse
// Operators-mathematical operation; +,-,*,/

// console.log("Hello");
// console.log("This is me Priya");
// console.log("I am in N9Solution");
// console.log("At Chabhail");

// console.log(5+6);
// console.log(5*4);

// console.log("a"+"b");

// Javascript is a asynchchronous and single threaded language.
// If two numbers are added it produces a output of sum and if two strings are added it concatentaion and produces outputs as a string.


// console.log("Priya");--For string
// console.log('Priya');
// console.log(`Priya`);

/* hjhdjh
bcjbc
djb */

// Variaable---is storage
// var, let, const

// let name="priya"
// console.log(name);

// let address="Ktm"

// let age="50"
// age="30"
// console.log(age);

// let num1=1;
// let num2=2;
// console.log(num1+num2);

// let num1=5;
// let num2=6;
// console.log(`sum of ${num1}`);---if something is written in back tick then This is template literal
// console.log("a"-"a");---NAN

// let  name="Priya"
// console.log(name);

// let age="10"
// console.log(age);

// let address="ktm"
// console.log(address);

// let num1=5;
// let num2=1;
// console.log(num1+num2);

// string
// example

// let a="Priya";
// console.log(a);

// let a="pri'ya";---we can use a single single in between of double straing and vice-veras and cant use the same in between
// console.log(1+2+3+"4");
// 1+2
// 3+3
// 6+"4"
// 64

// console.log("1"+2+3+4);=1234 because string always go from left to right
// If we add a number and StaticRange, the interpreter convers the number into a string and concantentates both together

// let address="ktm";
// let address="bhakatpur";
// console.log(address);
// we cannot declare variable name twice-it throws error

// String literals-``
// let num1=1;
// let num2=2;
// let message=`${num1}`;
// console.log(message);

// next

// let num1=1;
// let num2=2;
// let message=`${num1}`;
// let sum=`the sum of ${num1} and ${num2} is ${num1+num2}`;
// console.log(message);console.log(sum);

// let name="Priya";
// let surname="Dev";
// let fullname=`my name is ${name} ${surname}`; 
// console.log(fullname);

// truthy or falsy value
// boolean true of false
// != Not-falsy value
// single string is falsy value other are truthy value
// 0 is also a falsy value others true
// let a= !!"false";----false is also a value so it is true
// console.log(a);


// ===, >,<, >==, <==
// console.log(1===2);

// if else
// let a=true;
// if(a){
//     console.log("i am if");
// }
//     else {
//         console.log("i am else");

//     }
// in if else statement condition block is always wrapped by parenthesis
// ()=> parenthesis
// {}   curly bracets
// []  array
// let name="priya";
// if(name==="kekiii"){
//     console.log("if am a");
// } 
// else if(name==="bweee"){
//     console.log("if am b");
// }
// else if(name==="sita"){
//     console.log("if am c");
// }
// else (name==="gita")
// {
//     console.log("if am other");
// }


// let name=10
// if(name>1){
//     console.log("i am a");
// }
// else if(name>=11){
//     console.log("i am b");
// }
// else {
//     console.log("i am c");
// }


// if the value is true single Not (!) makes it false
// double not (!!) converts the value into boolean
//  let name="priya";
//  if (!name){
//     console.log("a");
//  }
//  else {
//     console.log("b");
//  }

// function
// define function
// call function
// pass value to function
// return
// arrow function----always use arrow function

// let fun1=function(){ -----function definition
//     console.log("i am function"); ----function declaration

// };  
// a function will not execute unless it is not ChannelSplitterNode. we have to call function to execute the function code block.
// fun1(); ----funcation call always after

// let home=function(){
//     console.log("i am function");
// };
// console.log("a");
// home();
// console.log("b");


// let fun1=function(a,b,c){
//     console.log("i am function");
//     console.log(a);
//     console.log(b);
//     console.log(c)
//     console.log(a+b);
//     console.log(a+b+c);
// };

// fun1(1,2,3); ----arguments


// let multiply=function(a,b,c){
//     let d= a*b*c;
//     console.log(d)
// };
// multiply(3,6,10);

// default value 
// let fun1= function(a,b,c=9){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// fun1(1,2,3);
// It is not necessary to have same number of arguments and parameters


// function with return
// let fun1= function(){
//  return 10;
// console.log("a"); unread
// }
// let data=fun1();
// console.log(data);
// function without return:call normally fun1()
// function with return: let data=fun1(), store by storing it in a variable.

// let fun1= function(){};----Format 

// arrow function syntax
// let fun1= ()=>{} ---syntax;  ()=>{}

// example
// let age=18;
// let fun1=()=>{
// if (age > 17){
// console.log("he can go to club");
// }
// else{
// console.log("he is not young");
// }
// let data =fun1();

// let add=(num1, num2) => {
//     let num3= num1+num2;
//     return num3
// or
// return num1+num2; ---better approach
// };
// javascript function can reyturn only one value 
// let sum =add(8,9);
// console.log(sum);


// let name="priya"
// console.log(name);
// name="ram";
// console.log(name);
// javascript is a dynamic langauage because a variable can be stored diffrent value at a different time

// const name="priya";
// console.log(name);
// name="ram";
// console.log(name);

// export and import
// option and esc

// Date
// console.log(new Date());
// It gives the current date and TimeRanges. new date() gives data in iso faormat:yyyy-mm-ddThh:mm:ss
//   next methods to derive date

// console.log(new Date().toDateString());
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());

// length 
// let name="Priya";
// console.log(name.length);

// let name="Priya Dev";
// console.log(name.length);

// toLowerCase---make all in small letters
// let name="PrIYA";
// console.log(name.toLowerCase());

// replaceALL
// let name="Tree";
// console.log(name.replaceAll("Tree","Mango"));

// UpperCase
// let name="Mango"
// console.log(name.toUpperCase());

// For loop--syntax: for (){}
// for loop repeats until a specified condition evaluates to False
// This posses 3 phases; 
// Initialization---only runs at First 
// condition ---runs until its requirement (loop body is also executed everytime if condition is true)
// afterthought

// let i=0;
// for (i=0; i<3; i=i+1){
//     console.log(i); -----Statement
// }


// while Loop
// if the condition becomes false, statement with in the loop stops executing.
// let i=0;
// while(i<2){
//     console.log(i);
//     i=i+1;
// }

// do while
// statement is always executed once before the condition is executed
// let i=0;
// do{
//     console.log(i);
//     i=i+1;
// } while (i<2);


// Array ----[]
// Method: map----Map always return 
// syntax:()=>{}  ---list.map((value, index)=>{})
 
// let list=["a","b","c"];
//  let output= list.map((value, index)=>{
// return 5;
//  });
// console.log(output);

// for value
// let list=["a","b","c"];
//  let output= list.map((value, index)=>{
// return value;
//  });
// console.log(output);

// for index---index start with 0 like 0,1,2,..
// let list=["a","b","c"];
//  let output= list.map((value, index)=>{
// return index;
//  });
// console.log(output);

// value and index combine
// let list=["a","b","c"];
//  let output= list.map((value, index)=>{
// return `${value}${index}`;
//  });
// console.log(output);



// let list=["a","b","c"];
//  let output= list.map((value, index)=>{
//     console.log("Priya");
// return value+index;
//  });
// console.log(output);


// Use map methos if both input and output arrays are same and both input and output's length are same.
// Like: [1,2,3,4]=[2,4,6,8]----4=4
// let list=[1,2,3,4];
//  let output= list.map((value, index)=>{
// return value*2;
//  });
// console.log(output);

// I need this to make in Function Form ---function bhitra map
// let fun1=(inputArr)=>{
//     let output=inputArr.map((value, index)=>{
//         return value*2;
//     });
//     return output;
// };

// let fun =fun1([1,2,3,4])
// console.log(fun);

// split ----string to array converter----"" to []
// console.log("priya".split(""));
// next example
// console.log("priya".split("i"));


// join ---- array to string----[] to ""
// console.log(["p","r","i","y","a"].join("*"));
// next example
// console.log(["p","r","i","y","a"].join(""));

// Filter ---Arrat bhitra ko function
// Filter only returns true of false

// let list=["a","b","c"];
// let list1=list.filter((value, index)=>{
// return true;
// });
// console.log(list1);

// let list=["a","b","c"];
// let list1=list.filter((value, index)=>{
// return false;
// });
// console.log(list1);

// let list=["a","b","c","d","e"];
// let output=list.filter((value, index)=>{
//     if (value==="f"){
// return true;
//     }else{
//         return false;
//     }
// });
// console.log(output);


// [1,2,3,6]=[2,6]
// let input=["1","2","3","6"];
// let output=input.filter((value, index)=>{
//     if (value% 2===0){
// return true;
//     }else{
//         return false;
//     }
// });
// console.log(output);


// find
// let input=[1,2,3,4];
// let output=input.find((value, index)=>{
// return true;
// });
// console.log(output);

// true or false
// jun value m data xaina yuslai false like blank
// xa vney true like "Priya" 1, 
// let input=["Priya","",0, "Oedz",null, undefined, true, false]
// let output=input.filter(Boolean);
// console.log(output);

// ["ram","hari","shyam","roshan"] => print the value of array which is greater then 4
// let input=["ram","hari","shyam", "roshan"]
// let output=input.filter((value, index)=>{
//         if (value.length>4){
//     return true;
//         }else{
//             return false;
//         }
//     });
//     console.log(output);

// for each
// let input=[1,2,3];
// let output=input.forEach((value, index)=>{
//     console.log(value);
// });


// includes----if exact value xa vney true navae false
// let input=["ram","hari","shyam", "roshan"]
// let output=input.includes("priya");
// console.log(output);

// let input=["ram","hari","shyam", "roshan"]
// let output=input.includes("ram");
// console.log(output);

// these 4 are array ko function
// push ---push value to last
// pop ----remove last value
// unshift ---push value to first
// shift -----remove first value

// let input=[1,2,3,4]
// let output=input.push(5);
// console.log(output);

// let input=[1,2,3,4]
// input.push(5);
// console.log(input);

// let input=[1,2,3,4]
//  input.pop();
// console.log(input);

// let input=[1,2,3,4]
//  input.unshift(9);
// console.log(input);

// let input=[1,2,3,4]
// input.shift();
// console.log(input);


// sort----it prints in order form like capital always come in first and likewise
// let input=["d","r","t", "k", "z","a","A"]
// let output=input.sort();
// console.log(output)


// let input=["dipak","ram","rao", "tina", "kiran", "zed","alok","Anish"]
// let output=input.sort();
// console.log(output)

// slice--need 
// [1,2,3,4]
// let input=[1,2,3,4];
// let newinput=input.slice(2);
// console.log(newinput);

// if we need only the last value then we can write: -1
// let input=[1,2,3,4];
// let newinput=input.slice(-1);
// console.log(newinput);

// reduce---
// find the sum of all elements of an array
// let input=[1,2,3,4];
// let newinput=input.reduce((previous, current)=>{
//     return previous+current;
// },0);
// console.log(newinput);

// let input=[1,2,3,4];
// let newinput=input.reduce((previous, current)=>{
//     return previous*current;
// },1);
// console.log(newinput);


// find the sum of all even number of an array
// let input=[1,2,3,5,8,10];
// let output=input.filter((value, index)=>{
//             if (value% 2===0){
//         return true;
//             }else{
//                 return false;
//             }
//         });
//         console.log(output);
// let newinput=output.reduce((previous, current)=>{
//         return previous+current;
//     },0);
//     console.log(newinput);

// object--- key value pair
// ={} --single object
// [{},{},{},{}] --- array of object

// [1,2,3,4,"ram","hari"]
// Array is a collection of values whereas object is a collection of key value PerformanceObserverEntryList. Key value value pairs are called properties.
// let info={
//     name:"ram",
//     age:29,
//     isMarrie:false,
//     location:"Kathmandu",
// };

// console.log(info.age); 

// let info={
//         name:"ram",
//         age:29,
//         isMarried:false,
//         location:"Kathmandu",
//     };
//     // get value
//     console.log(info.age); 
//     console.log(info.name);
//     console.log(info);
//     // change value
//     info.name="hari";
//     info.age=50;
//     console.log(info);
//     // delete
//     delete info.isMarried;
//     console.log(info);

    
// Duplicate ket doesn't exist, if exist override by below code
// let input={
//     name:"ram",
//     age:25,
//     name:"roshan",
// };
// console.log(input.name);

// let input={
//     name:'ram',
//     favFruits:["apple","orange"],
//     location:{
//         country:"Nepal",
//         provirnce:"Bagmati",
//         city:"Katmhamdu",
//     },
//     age:function(){
//         console.log("My name is ram. I am from Nepal");
//     },
// };
// console.log(input.favFruits[1]);
// console.log(input.location.city)
// input.age();


// alias
// alias measn changing variable names. Once you change variable names you can it by chnaged name
// let{
//     name:fullName,
//     age:year,
//     isMarried,
// }={
//     name:"ram",
//     age:25,
//     isMarried:true,
// };
// console.log(fullName);


// this keyword---scope bhitra kaam garxa
// let info = {
//     name:"ram",
//     surname:"Poudel",
//     fullName:function(){
//         console.log(this.name);
//         console.log(this.surname);
//     },
// };
// info.fullName();

// Destructuring Assignment
// let planet=["sun","moon","venus"];
// let [a,b,c]=planet;
// console.log(a,b,c);

// default value
// let planet=["sun","moon","venus"];
// let [a,b,c,d="mercury"]=planet;
// console.log(a,b,c,d);

// spread operator
// syntax---- =>...
// let planet=["sun","moon", "pluto"];
// let[planet1,...rest]=planet;
// console.log(planet1);
// console.log(rest);

// let planet=["sun","moon", "pluto"];
// let[planet1,...rest]=planet;
// console.log(rest);
// console.log(planet1);

// let name=["priya", "Dev","Oedz", "Virat"];
// let data=["School","Kathmandu","Nepal"];
// let totalData=['this is my data', ...data,...name];
// console.log(totalData);

// let name=["priya", "Dev","Oedz", "Virat"];
// let data=["School","Kathmandu","Nepal"];
// let totalData=[...data,'this is my data',...name];
// console.log(totalData);


