
/* 
  创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
  深拷贝: 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象
*/
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

/*
  这一版本 你向面试官展示了 可以使用递归来解决问题,但是不全面 没有考虑数组
*/