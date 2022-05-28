1. Object.keys 和 for in 的区别
Object.keys不能遍历原型上的属性，for in 可以。

## EcmaScript中的数据类型

  1. number
  2. string
  3. boolean
  4. bigInt
  5. Symbol
  6. undefined
  7. null
  8. Object
  9. Array
  10. Function
  11. Math
  12. JSON
  13. Date
  14. RegExp
  15. Error
    16. Class

> EcmaScript将数据类型分为基本数据类型和引用数据类型。

### 基本数据类型

- 其中number，string，boolean，bigIng，Symbol，undefined，null属性引用数据类型，其他的属于引用数据类型。

- 基本数据类型既非对象也没有方法，而且基本数据类型的值都是不可以改变的(值不可以改变)。

#### 介绍一下symbol

其中Symbol是es6中提出的新特性

Symbol是唯一的且不可被修改的(满足基本数据类型的定义),  因为该值是唯一的，所以该数据类型通常被用作一个对象属性的键值——当你想让它是私有的时候。例如，**symbol** 类型的键存在于各种内置的 JavaScript 对象中。同样，自定义类也可以这样创建私有成员。

当我们根据推荐将Symbol作为一个对象的键名时, 像下面这样: 

```js
	const s = Symbol()
	const obj = { name: 'obj' }
  obj[s] = 'age'
```



那么该属性(这个用Symbol作为键的属性)就具备了这两种特征：

1. 该属性是匿名的

    该属性不会在`Object.getOwnPropertyNames()` 方法返回的数组中出现。

2. 该属性是不可枚举的

   该属性不会在for in 循环结构中出现。

但是该属性可以通过 `Object.getOwnPropertySymbols(o: Object)` 得到。

即: 我们在外界可以通过

`      console.log(obj[Object.getOwnPropertySymbols(obj)[0]])` 获取到这个属性对应的value，该log语句打印 `age`。

当我们想让一个对象中的属性私有的时候，作者更倾向于使用`Object.defineProperty`或者`proxy` 或者 对象中的`get /set` 关键字来 对 对象中属性进行私有化。 但是如果**要想保证该对象这个属性的唯一且私有化，可以使用symobl配合对象劫持来实现。**



### 引用数据类型

引用数据类型通常可以被实例化。 除了Math和JSON，这两者属于静态对象，不可以被实例化，可以使用静态对象中的静态方法。

#### 对象

一个 JavaScript 对象就是键和值之间的映射。键是一个字符串（或者 [`Symbol`]），值可以是任意类型的值。

我们通常使用对象字面量的形式去创建一个对象，当使用对象字面量创建一个对象时，会自动初始化一组属性如 hasOwnProperty， toString等。而且该对象中具有两个概念：

1. 数据属性的特性(Attributes of a data property)

   | 特性             | 数据类型           | 描述                                                         | 默认值    |
   | ---------------- | ------------------ | ------------------------------------------------------------ | --------- |
   | [[Value]]        | 任何Javascript类型 | 包含这个属性的数据值。                                       | undefined |
   | [[Writable]]     | Boolean            | 如果该值为 `false，`则该属性的 [[Value]] 特性 不能被改变。   | true      |
   | [[Enumerable]]   | Boolean            | 如果该值为 `true，`则该属性可以用 [for...in]循环来枚举。     | true      |
   | [[Configurable]] | Boolean            | 如果该值为 `false，`则该属性不能被删除，并且 除了 [[Value]] 和 [[Writable]] 以外的特性都不能被改变。 | true      |

   

2. 访问器属性

   | 特性    | 类型                   | 描述                                                         | 默认值    |
   | ------- | ---------------------- | ------------------------------------------------------------ | --------- |
   | [[Get]] | 函数对象或者 undefined | 该函数使用一个空的参数列表，能够在有权访问的情况下读取属性值 | undefined |
   | [[Set]] | 函数对象或者 undefined | 该函数有一个参数，用来写入属性值                             | undefined |

详见

1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
2. https://juejin.cn/post/6991810819944087582



#### 日期

new Date()

#### 有序集合

数组和<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">类型数组</a>

#### 键值集合

Maps, Sets, WeakMaps, WeakSets

#### 结构化数据

JSON： 前后端通用交换格式

#### 其他

在JavaScript中，正则和Error也是对象。



### typeof 语法

> 当我们想判断一个对象是基本数据类型还是引用数据类型，使用typeof可以准确的判断。

```js
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';

// Strings
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
```

但是要注意： 

当我们`typeof null === 'object';` 得到了object，这是一个我们不期望的结果。所以我们使用一个判断语句就可以准备的 对  **如何判断一个数据是基本数据类型还是引用数据类型？** 做出回答：

##### 如何判断一个数据是基本数据类型还是引用数据类型？

```js
const plainValues = ['number', 'string', 'boolean', 'bigint', 'symbol', 'undefined', 'null']

function isPlainValue(value) {
  if (value === null) {
    return true
  }
  return plainValues.includes(typeof value)
}
const flag = isPlainValue()
console.log(flag)
```

 ##### 如何判断该变量是否是一个函数

```js
function c() {}
const d = () => {}
class Person {}
function* gen() {}
async function asf() {}
const fn = new Function()
console.log(typeof c)
console.log(typeof d)
console.log(typeof Person)
console.log(typeof gen)
console.log(typeof asf)
console.log(typeof fn)
```

以上打印全都是function。



### instanceof

P1 instanceof Person

> instanceof 关键字是检测 p1对象的原型链上是否有Person构造函数的原型。一般用于自定义对象的判断。比如判断实例化对象是否属于某个构造函数。

实现一个instanceof

```js
function instance(left,right){
      left=left.__proto__
      right=right.prototype
      while(true){
           if(left==null)
                return false;
           if(left===right)
                return true;
           left=left.__proto__
      }
}
```



当我们使用`      const obj = Object.create(null)` 创建一个对象时。`obj instanceof Object` 为false， 所以我们一般使用instanceof来判断自定义实例化对象。



### 如何判断一个数据是否是数组

`Array.isArray(value)`





### Object.prototype.toString

Object.prototype.toString方法返回一个对象的字符表现串形式。

EcmaScript中定义的类型使用Object.prototype.toString可以精准的判断。

```js
Object.prototype.toString.call(123) // [object Number]
Object.prototype.toString.call('str') // [object String]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(123n) // [object BigInt]
Object.prototype.toString.call(Symbol()) // [object Symbol]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call({}) // [object Object]
Object.prototype.toString.call([]) // [object Array]
Object.prototype.toString.call(Math) // [object Math]
Object.prototype.toString.call(JSON) // [object JSON]
Object.prototype.toString.call(new Function()) // [object Function]
Object.prototype.toString.call(new Date()) // [object Date]
Object.prototype.toString.call(new RegExp()) // [object RegExp]
Object.prototype.toString.call(new Error()) // [object Error]
```

在上文中我们说到 **如何判断该变量是否是一个函数**

那么我们如何判断一个函数是什么类型的函数呢？

#### 判断一个函数是什么类型的函数



那么如果我们想判断一个函数是async 标记的函数， 还是用generator标记的函数呢？也可以使用Object.prototype.toString。

```js
Object.prototype.toString.call(async function () {}) // [object AsyncFunction]
Object.prototype.toString.call(function* () {}) // [object GeneratorFunction]
Object.prototype.toString.call(async function* () {}) // [object AsyncGeneratorFunction]
```

怎么区分普通函数和箭头函数

```js
const arrow_fn = () => {}
function fn() {}
console.log(arrow_fn.prototype) // undefined
console.log(fn.prototype) // {constructor: ƒ}
```



但是这种方式也是不可靠的。

因为object可以通过定义一个Symbol来改变Object.prototype.toString()的行为。toStringTag属性，导致意外的结果。

```js
const myDate = new Date();
Object.prototype.toString.call(myDate);     // [object Date]

myDate[Symbol.toStringTag] = 'myDate';
Object.prototype.toString.call(myDate);     // [object myDate]

Date.prototype[Symbol.toStringTag] = 'prototype polluted';
Object.prototype.toString.call(new Date()); // [object prototype polluted]
```



所以为了保险起见，在判断一个对象时， 我们先判断下 `obj[Symbol.toStringTag]` 是否存在。然后在 Object.prototype.toString()进行判断。当然，如果这个对象是我们可控的，我们就不用判断啦。而且这个方法的精度更高。





总结： 我们判断类型都可以使用Object.prototype.toString进行判断，当使用自定义构造函数实例化对象时，我们使用instanceof来进行判断该对象的类型。
