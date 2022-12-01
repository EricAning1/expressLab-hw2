const express = require('express');
const app = express();
let port = 8000;

//GREETINGS
app.get('/greeting', (req, res) => {
  res.send('Hello brother!');
});

app.get('/greeting/:name', (req, res) => {
  res.send(`Hey, ${req.params.name}!`);
});

//TIP CALCULATOR
app.get(`/tips/:total/:tipPercentage`, (req, res) => {
  let tip = req.params.total * (req.params.tipPercentage / 100);
  res.send(`You pay a tip of ${tip}`);
});

//MAGIC 8 BALL
app.get('/magic/:phrase', (req, res) => {
  let magicResponse = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];
  let indexRandomResponse = Math.ceil(
    Math.random() * (magicResponse.length - 1)
  );
  res.send(
    `This is the response to your question "${req.params.phrase}": <h1>${magicResponse[indexRandomResponse]}</h1>`
  );
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}....`);
});
