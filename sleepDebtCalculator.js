//Beginner project

function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 6;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 5;
    case 'thursday':
      return 5;
    case 'friday':
      return 7;
    case 'saturday':
      return 7;
    case 'sunday':
      return 7;
  } 
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
function getIdealSleepHours () {
  const idealHours = 7;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(88);
  console.log(`Actual hours slept last week: ${actualSleepHours}`)
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
    timeCalculated = actualSleepHours - idealSleepHours;
    console.log(`You should be sleeping ${timeCalculated} hours less per week.`);
  }else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest');
    timeCalculated = idealSleepHours - actualSleepHours;
    console.log(`You should sleep ${timeCalculated} hours more per week.`); 
  } else {
    console.log('Error')
  }
}

calculateSleepDebt();


