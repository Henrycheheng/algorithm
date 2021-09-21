
module.exports = function clone(target) {
  if (typeof target === 'object') {
    // 加入判断数组的情况 => 只需要 将变量声明 改为 let 然后三元+判断数组的api
    let cloneTarget = Array.isArray(target) ? {} : []
    for (const key in target) {
      cloneTarget[key] = clone(target[key])
    }
    return cloneTarget
  } else {
    return target
  }
}