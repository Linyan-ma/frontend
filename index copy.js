class TreeNode {
  constructor(opt) {
    this.left = opt.left;
    this.right = opt.right;
    this.value = opt.value;
  }
}
// 你可以将以下二叉树：

// 序列化为 "[1,2,3,null,null,4,5,null,null,null,null]"
let tree = {
  value: 1,
  left: {
    value: 2,
  },
  right: {
    value: 3,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
};
function servlized(tree) {
  let res = [];
  function _servlized(tree) {
    if (tree.value) {
      res.push(tree.value);
    }
    if (tree.left) {
      _servlized(tree.left);
    } else {
      res.push("left_null");
    }
    if (tree.right) {
      _servlized(tree.right);
    } else {
      res.push("right_null");
    }
  }
  _servlized(tree);
  return res;
}
//     1
//    / \
//   2   3
//      / \
//     4   5
let arr = [1, 2, null, null, 3, 4, null, null, 5, null, null];
function unservlized(arr) {
  let resTree = {};
  for (let i = 0; i < arr.length; i++) {
    resTree.value = arr[i];
    resTree.left = { value: arr[i + 1] };
  }
}
console.log(servlized(tree));
