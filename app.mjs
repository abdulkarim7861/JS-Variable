// VARIABLES FOR STRING  \\

//Problem 1
let username;
console.log(`UserName: ${username}`) //undefined

// Problem 2
let myName =`Abdul Karim Mandvia `;
console.log(`My FullName is: ${myName}`); //My FullName is Abdul Karim Mandvia

// Problem 3
let tittled ; //initalize variable
tittled =  `Hello World`; // Assign Value To Variable
alert(`${tittled}`) //Print Output

//Problem 4 
//Taking Three Input
let studentName = prompt(`Enter Your Name:`);
let age = parseInt(prompt(`Enter Your Age:`));
let course = prompt(`Enter Your Course:`);
//Output 
alert(`Hello ${studentName}`);
alert(`You are ${age} year old`);
alert(`Enroll in  ${course} Course`);

//Problem 6 
let email = prompt("Enter Your Email-Address:");
alert(`Your Email Address is ${email}`);

//Problem 7
let book = `A smarter way to learn JavaScript.`;
alert(`I am trying to learn from the book ${book}`);

//Problem 8 
document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");

//Problem 9 
let design = `▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬`;
alert(`${design}`)


// VARIABLES FOR NUMBER  \\

//Problem 1
let ages = 19 ;
alert(`My age is ${ages}`);

//Problem 2
let visterTime = 14;
alert(`You have visited this site ${visterTime} times`);

//Problem 3 
let birthYear = 2003;
document.write(`<h3>My Birth Year is ${birthYear}</h3> <br> Data type of declared variable is ${typeof(birthYear)}`);

//Problem 4
let visitorName = `John Doe`;
let  productTitle = "T-shirt(s)";
let quantity = 5;
let statement = document.write(` <h2> ${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store.</h2>`);
