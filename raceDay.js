let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 19;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(`Race Number: ${raceNumber}, you will race at 09:30 am.`);
} else if (!registeredEarly && age > 18) {
  console.log(`Race Number: ${raceNumber}, you will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Race Number: ${raceNumber}, you will race at 12:30 pm.`);
} else {
  console.log(`Race Number: ${raceNumber}, See the registration desk.`);
}
