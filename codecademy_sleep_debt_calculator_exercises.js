// Goal: Calculate if you're getting enough sleep each week using a sleep debt calculator. 

//The program will determine the actual and ideal hours of sleep for each night of the week. 

//Finally, it will, calculate, in hours, how far you are from your weekly goal. 



// TASK 1, 2, AND 3
const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 5
      break;
    case 'tuesday':
      return 5
      break;
    case 'wednesday':
      return 5
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 5
      break;
    case 'saturday':
      return 5
      break;
    case 'sunday':
      return 5
      break;
    default:
      console.log('Error, please select a valid day of the week.')
      break;
  }
};

// TASK 3 - Test function
//console.log(getSleepHours('MONDAY'));


// TASK 4, 5 (implicit return). Calc total sleeps hours for the week
const getActualSleepHours = () =>
  getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');



// TASK 6
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};


// TASK 7 - Test function
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

// TASK 8

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep this week than required by ' + (actualSleepHours - idealSleepHours) + ' hours.')
  } else {
    console.log('You got less sleep than needed this week, you should get some more rest! Your current sleep debt for the week is ' + ((actualSleepHours - idealSleepHours) * -1) + ' hours.');
  }
};


/*
// TASK 8 - Alternative option using variables to calculate sleepOver and sleepUnder.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepOver = actualSleepHours - idealSleepHours; 
  let sleepUnder = idealSleepHours - actualSleepHours

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    //console.log('you got: ' + (actualSleepHours - idealSleepHours))
    //console.log('actualSleepHours ' + actualSleepHours)
    console.log(`You got more sleep than needed, your sleep time is over by ${sleepOver} hours`);
  } else {
    console.log(`You got less sleep than needed, you should get some more rest. You missed your sleep target by ${sleepUnder} hours!`);
  }
};
*/

// TASK 11
calculateSleepDebt()




