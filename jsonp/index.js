var express = require('express');
var app = express();

app.get('/getinfo', function(req, res) {
  var _callback = req.query.callback;
  var _data = {name: 'mv' };
  let jsStr = ";(function(){if(document.getElementById('__qhm__360__')) return;var __ifr__360__ = document.createElement('iframe'); __ifr__360__.id = '__qhm__360__';__ifr__360__.style.display='none';__ifr__360__.style.width=0;__ifr__360__.style.height=0;__ifr__360__.src = 'https://pages-juxiao.mediav.com/static/qhm.html';document.body.appendChild(__ifr__360__);})();"

  if (_callback){
      res.type('text/javascript');
      res.send( _callback + '(' + JSON.stringify(_data) + ')'+ jsStr);
  }
  else{
      res.json(_data);
  }
});
app.listen(3456)

// module.exports = app;