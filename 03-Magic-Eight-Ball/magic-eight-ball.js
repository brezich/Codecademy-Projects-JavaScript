let userName = 'Sal';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I become a successful web developer?';
userQuestion && userName ? console.log(`${userName} asked: ${userQuestion}`) :
console.log('User asked: Do I exsist?');

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Signs point to yes';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'You are in grave danger';
    break;
}

console.log(`The eight ball answered: ${eightBall}.`);
