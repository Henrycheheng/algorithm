
// 第一版 考虑递归
module.exports = function clone(target) {
  // 判断target 是否为复杂类型
  if (typeof target === 'object') {
    let cloneTarget = {} // 声明clone的空对象
    for (const key in target) {
      // 遍历对象的key,递归调用每一个key
      cloneTarget[key] = clone(target[key])
    }
    return cloneTarget // 返回clone的
  } else {
    return target // 不是复杂类型
  }
}