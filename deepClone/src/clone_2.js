
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

/**
 * 此版本虽然 解决了数组,但是会有一个递归死循环的问题 会报错为 maxinum call stack size exceed 这种最大栈内存调用溢出的问题
*/