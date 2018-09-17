var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/send', function (req, res) {
  console.log(req.query.input_text);
  res.send(req.query.input_text); 
   
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
