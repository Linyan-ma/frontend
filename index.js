let root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
    right: {
      value: 5,
    },
  },
};
function traver(root) {
  let queqe = [],
    res = [];
  queqe.push(root);
  while (queqe.length) {
    let curLevel = [],
      level = queqe.length;
    for (let i = 0; i < level; i++) {
      let cur = queqe.shift();
      cur.left && queqe.push(cur.left);
      cur.right && queqe.push(cur.right);
      curLevel.push(cur.value);
    }
    // console.log(curLevel);
    res.push(curLevel);
  }
  return res;
}
let res = traver(root);
console.log(res);
