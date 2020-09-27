const getSleepHours = day => {
  switch (day) {
    case "Monday":
      return 8;
      break; 
    case "Tuesday":
      return 7;
      break;
    case "Wednesday":
      return 5;
      break;
    case "Thursday":
      return 9;
      break;
    case "Friday":
      return 4;
      break;
    case "Saturday":
      return 10;
      break;
    case "Sunday":
      return 6;
      break;
    default:
      return "Invalid input!";
      break;
  }
};

// console.log(getSleepHours("Sunday"));

const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");

 console.log("The user slept " + getActualSleepHours() + " hour(s) this week.");

const getIdealSleepHours = idealHours => idealHours * 7;

 console.log("Ideally the user needs " + getIdealSleepHours(6) + " hour(s) of sleep per week.");

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(6);

  if (actualSleepHours === idealSleepHours) {
    console.log("The user got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than you needed this week.");
  } else {
    console.log("The user slept " + (idealSleepHours - actualSleepHours) + " hour(s) less than you needed. You should get some rest this week.");
  }
};

calculateSleepDebt();
