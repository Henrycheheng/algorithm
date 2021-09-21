
/*
 * 集中遍历 优化性能 while
*/


function clone1(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    // 1 数组或者对象
    const isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    // 2 检测是否克隆过
    if (map.get(target)) {
      return map.get(target)
    }
    // 3 set设置  
    map.set(target, cloneTarget)
    // 4 遍历递归
    for (const key in target) {
      cloneTarget[key] = clone(target, map)
    }
    return cloneTarget
  } else {
    return target
  }
}

function forEach(array, iteratee) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

function clone2(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target) ? [] : {}
    let cloneTarget = isArray
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)

    const keys = isArray ? undefined : Object.keys(target);

    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = clone2(target[key], map)
    })

    return cloneTarget
  } else {
    return target
  }
}

module.export = {
  clone1,
  clone2
}