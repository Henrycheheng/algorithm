/**
 * 通过WeakMap 修改 
 * WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。
 * const obj = {}，就默认创建了一个强引用的对象，我们只有手动将obj = null，它才会被垃圾回收机制进行回收，如果是弱引用对象，垃圾回收机制会自动帮我们回收。
*/

module.exports = function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    // 1 数组or 对象
    cloneTarget[key] = Array.isArray(target) ? [] : {} // 判断是数组/对象
    // 2 是否克隆过
    if (map.get(target)) {
      return map.get(target)
    }
    // 3 set
    map.set(target, cloneTarget)
    // 4 遍历
    for (const key in target) {
      cloneTarget[key] = clone(target, map)
    }
    return cloneTarget
  }
}