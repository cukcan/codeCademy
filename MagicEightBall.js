let userName = "cukcan";
userName === "" ? console.log("Hello!") :
console.log(`Hello, ${userName}!`);

let userQuestion = "";
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`The eight ball answered: ${eightBall}`);

// now I'm gonna code the same example with "else if"

if (randomNumber === 0) {
  console.log("0");
} else if (randomNumber === 1) {
  console.log("1");
} else if (randomNumber === 2) {
  console.log("2");
} else if (randomNumber === 3) {
  console.log("3");
} else if (randomNumber === 4) {
  console.log("4");
} else if (randomNumber === 5) {
  console.log("5");
} else if (randomNumber === 6) {
  console.log("6");
} else {
  console.log("7");
}
