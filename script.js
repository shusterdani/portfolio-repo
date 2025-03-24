function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
// Declaring variables
  let firstName = "Dani";
  let lastName = "Shuster"
  const age = 25;

  document.writeln("First name:" + firstName + "<br>");
  document.writeln("Last name:" + lastName + "<br>");
  document.writeln ("Age: " + age + "<br>");

  //user input
  const fullName = prompt("Enter your full name: " );
  let salary = prompt("Enter your salary: ");
  salary = salary * 1.05;
  document.writeln ("Full name: " + fullName + "<br>");
  document.writeln("Salary after bonus: " + salary + "<br>");

const num1 = +prompt("Enter first number: ");
document.writeln(num1)


// Conditionals

let num = +prompt("Enter a number: ");
if (num % 2 == 0) {
    document.writeln("The number " + num + " is even.<br>");

}
else if (num < 0) {
  document.writeln("The number " + num + " is negative.<br>");

}

else {
  document.writeln("The number " + num +"is positive.<br>");
}

//Switch

const num2 = +prompt("Enter a num between 1 and 5: ");
switch (num2) {
  case 1:  document.writeln("One<br>");
  break;
  case 2: document.writeln("Two<br>");
  break;
  case 3: document.writeln("Three<br>");
  break;
  case 4: document.writeln("Four<br>");
  break;
  case 5: document.writeln("Five<br>");
  break;
  default: document.writeln("Error, please enter 1 to 5<br>");

}
