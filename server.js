var express = require("express");
var app = express();
var parser = require('body-parser');

app.use(express.static('public'));
app.use(parser());

app.post('/send', function (req, res) {
 // console.log('text', res);
 var response = {
   modifiedText : `Вы ввели ${req.body.input_text}` 
 };
  //res.set('Content-type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(response)); 
   
});
// app.get('/send', function (req, res) {
//   console.log(req.query.input_text);
//   res.send(req.query.input_text); 
   
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
