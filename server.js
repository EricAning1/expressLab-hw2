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

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}....`);
});

//TIP CALCULATOR
app.get(`/tips/:total/:tipPercentage`, (req, res) => {
  let tip = req.params.total * (req.params.tipPercentage / 100);
  res.send(`You pay a tip of ${tip}`);
});
