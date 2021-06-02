function mergeTwoList(arr1, arr2) {
  let m1 = arr1.length,
    m2 = arr2.length;
  let p1 = 0,
    p2 = 0,
    p = 0,
    res = [];
  while (p1 < m1 && p2 < m2) {
    res[p++] = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++];
  }
  if (p1 < m1) {
    let remain = arr1.slice(p1, m1 - 1);
    res = [...res, ...remain];
  }
  if (p2 < m2) {
    let remain = arr2.slice(p2, m2 - 1);
    res = [...res, ...remain];
  }
  return res;
}

function mergeLists(arrList) {
  let result = [];
  for (let i = 0; i < arrList.length; i++) {
    result = mergeTwoList(arrList[0], result);
  }
  return result;
}
