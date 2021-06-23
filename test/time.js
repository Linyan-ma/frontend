const axios = require("axios");
function time(time = +new Date()) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 23).replace("T", " ").replace(/-/g, "-");
}
function tmallTime() {
  axios
    .get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp")
    .then((res) => {
      let timesmap = parseInt(res.data.data.t);
      // console.log(timesmap);
      // console.log(new Date(timesmap));
      let timestring = time(timesmap);
      console.log(timestring);
    });
}
function jdTime() {
  axios
    .get(
      "https://api.m.jd.com/client.action?functionId=queryMaterialProducts&client=wh5"
    )
    .then((res) => {
      // console.log(res);
      let timesmap = parseInt(res.data.currentTime2);
      // console.log(timesmap);
      // console.log(new Date(timesmap));
      let timestring = time(timesmap);
      console.log(timestring);
    });
}
setInterval(() => {
  // tmallTime();
  jdTime();
}, 100);
