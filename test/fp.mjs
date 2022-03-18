import flow from "lodash/fp/flow.js";
import compose from "lodash/fp/compose.js";
import curry from "lodash/fp/curry.js";

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

// |(1+2)*3|
// 嵌套写法
Math.abs(multiply(add(1, 2), 3));
// lodash fp flow从左到右，没有改变顺序
let lf = flow([add, multiply.bind(this, 3), Math.abs])(1, 2);
console.log(lf);

// lodash compose
let lc = compose(Math.abs, multiply.bind(this, 3), add)(1, 2);
console.log(lc);

// curry后的写法
let curryMutiply = curry(multiply);
let _multiply = curryMutiply(3);
let lcc = compose(Math.abs, _multiply, add)(1, 2);
console.log(lcc);

// mutiplyN
function multiplyN(a, b, c) {
  return a * b * c;
}
let curryMutiplyN = curry(multiplyN);
let _multiply3 = curryMutiplyN(3, 4);
let lccn = compose(Math.abs, _multiply3, add)(1, 2);
console.log(lccn);

// ramda
import * as R from "ramda";
let rc = R.compose(Math.abs, _multiply3, add)(1, 2);
console.log(rc);
