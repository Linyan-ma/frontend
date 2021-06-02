let list = [
  {
    id: 1,
    name: "foo",
    children: [],
  },
  {
    id: 2,
    name: "bar",
    children: [
      {
        id: 3,
        name: "baz",
        children: [],
      },
      {
        id: 4,
        name: "ha",
        children: null,
      },
    ],
  },
  {
    id: 5,
    name: "ha",
    children: null,
  },
];
//广度优先遍历
function findObjById(list, func) {
  let res = null;
  if (typeof func !== "function") return null;
  function _findObjById(list, func) {
    for (let i = 0; i < list.length; i++) {
      let flag = func(list[i]);
      if (flag) {
        res = list[i];
        break;
      }
    }
    if (res) return res;
    for (let i = 0; i < list.length; i++) {
      if (list[i].children && list[i].children.length) {
        _findObjById(list[i].children, func);
      }
    }
  }
  _findObjById(list, func);
  return res;
}

let res = findObjById(list, function (obj) {
  if (obj.name === "ha") {
    return true;
  }
  return false;
});
console.log(res);
