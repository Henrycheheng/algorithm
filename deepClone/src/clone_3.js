
/**
 * 解决循环引用的问题 我们可以开辟一个存储空间,来存储当前对象和拷贝对象的对应关系,当需要拷贝当前对象时 先去存储空间中找,有没有拷贝过这个对象 如果有直接返回 如果没有 继续拷贝 这样就解决了 循环引用的问题
 * 
 * 这个存储空间 需要存储 key-value 形式的数据 且key 可以是一个引用类型 我们可以选择Map这个数据结构
*/


/**
  * 思路: [] 检查map中有无克隆过的对象 => 有直接返回 
  * 没有当前对象做key 克隆队形作为 value 进行存储 继续克隆
*/

modeule.exports = function clone(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    // 1 判断是否克隆过
    if (map.get(target)) {
      return map.get(target) // 2 克隆过直接返回
    }
    // 3 使用map.set()判断 将当前对象作为key,克隆对象作为value 进行存储
    map.set(target, cloneTarget)
    // 4 遍历
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

/* target属性变为了一个Circular 类 => 循环引用的意思 */