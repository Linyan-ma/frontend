function removeSlashByNum(str, num) {
  if (num <= 0) return str;
  let m = str.indexOf("/");
  let strArr = str.split("");
  let n = strArr.filter((v) => v === "/").length;
  if (num > n) return str;
  for (var i = 0; i < num - 1; i++) {
    m = str.indexOf("/", m + 1);
    console.log(m);
  }
  // let strArr = str.split("");
  strArr.splice(m, 1);
  return strArr.join("");
}

function removeSlashByNum2(str, num) {
  if (num <= 0) return str;
  let strArr = str.split("");
  let cur = 0,
    total = null;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "/") {
      ++cur === num && (total = i);
    }
  }
  if (total) {
    strArr.splice(total, 1);
    return strArr.join("");
  }
  return str;
}
const str = "abc/defg/hij/k/l/m";
console.log(removeSlashByNum2(str, 1));
