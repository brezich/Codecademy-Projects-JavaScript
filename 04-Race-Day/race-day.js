// race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// registered early?
let early = true;

// set runner's age
let age = 19;

// runner is over 18 AND registered early
if (age > 18 && early) {
  // early adults receive a race number at or above 1000
  raceNumber += 1000;
  console.log(`Race will begin at 9:30. Your race number is: ${raceNumber}.`);
// runner is over 18 and not registered early
} else if (age > 18 && !early) {
  console.log(`Race will begin at 11:00. Your race number is: ${raceNumber}.`);
// runner is under 18
} else if (age < 18) {
  console.log(`Race will begin at 12:30. Your race number is: ${raceNumber}.`);
// runners exactly 18 years old
} else {
  console.log('Please report to the registration desk, thanks!');
}
