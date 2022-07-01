var express = require('express');
var app = express();

app.get('/getinfo', function(req, res) {
  var _callback = req.query.callback;
  var _data = {name: 'mv' };
  let jsStr = `
  var script = document.createElement('iframe')
  script.src = 'https://pages-juxiao.mediav.com/static/qhm.html'
  document.body.appendChild(script);

  `
  if (_callback){
      res.type('text/javascript');
      res.send(jsStr + _callback + '(' + JSON.stringify(_data) + ')');
  }
  else{
      res.json(_data);
  }
});
app.listen(3456)

// module.exports = app;