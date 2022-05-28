### 认识浏览器内核

1. 不同的浏览器引擎会有不同的内核组成
   1. 例如gekco(火狐，网景)，trident(微软，ie4-ie11)，webkit(safari, 以前的chrom也在使用)，blink(webkit的分支，chrom，edge，opera)
2. 事实上，我们经常说的浏览器内核指的是浏览器的排版引擎:
   1. 排版引擎(layout engine), 也称为浏览器引擎(browser engine), 页面渲染引擎(rendering engine)或样板引擎。



### 认识JavaScript引擎

- 高级的编程语言都是需要转成最终的机器指令来运行的。
- 我们编写的JavaScript无论交给浏览器环境或者node环境，最后都需要被cpu执行的。
- 但是cpu只认识自己的指令集，实际上是机器语言，才能被cpu执行。
- 所以我们需要JavaScript引擎来帮助我们将JavaScript代码翻译成cpu指令来运行。

比较常见的JavaScript引擎有哪些？

- spiderMonkey：第一款JavaScript引擎，由JavaScript作者开发
- chakra：微软开发，用于ie
- JavaScriptCore：webkit中的JavaScript引擎，Apple开发。好像小程序也用的这个。
- v8：chrom开发。



### 浏览器内核和JavaScript引擎的关系

以webkit举例：

webkit浏览器内核实际上是由两部分组成的。

1. WebCore：负责HTML解析，布局，渲染等相关工作。
2. JavaScriptCore： 解析，执行JavaScript代码





### v8引擎

我们来看一下对v8引擎的定义：

- v8是用c++编写的google开源高性能JavaScript和webAssembly引擎，它用于chrom和nodejs等
- 它实现ecmascript和webAssembly，并在win7或更高版本，macOS10.12.....等系统上运行。
- v8可以独立运行，也可以嵌入到任何c++应用程序中。



### v8引擎的架构

- V8引擎本身的源码**非常复杂**，大概有超过**100w行C++代码**，通过了解它的架构，我们可以知道它是如何对JavaScript执行的:

- Parse模块会将JavaScript代码转换成AST(抽象语法树)，这是因为解释器并不直接认识JavaScript代码; 
  - 如果函数没有被调用，那么是不会被转换成AST的;
  - Parse的V8官方文档:https://v8.dev/blog/scanner

-  Ignition是一个解释器，会将AST转换成ByteCode(字节码)
  - 同时会收集TurboFan优化所需要的信息(比如函数参数的类型信息，有了类型才能进行真实的运算); 
  - 如果函数只调用一次，Ignition会执行解释执行ByteCode;
  - Ignition的V8官方文档:https://v8.dev/blog/ignition-interpreter

- TurboFan是一个编译器，可以将字节码编译为CPU可以直接执行的机器码;
  - 如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能;
  - 但是，机器码实际上也会被还原为ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化(比如sum函数原来执行的是 number类型，后来执行变成了string类型)，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码;
  - TurboFan的V8官方文档:https://v8.dev/blog/turbofan-jit



### v8引擎

 **那么我们的JavaScript源码是如何被解析(Parse过程)的呢?

- Blink将源码交给V8引擎，Stream获取到源码并且进行编码转换;
- Scanner会进行词法分析(lexical analysis)，词法分析会将代码转换成tokens;
- 接下来tokens会被转换成AST树，经过Parser和PreParser: 
  - Parser就是直接将tokens转成AST树架构;
  - PreParser称之为预解析，为什么需要预解析呢?
    - 这是因为并不是所有的JavaScript代码，在一开始时就会被执行。那么对所有的JavaScript代码进行解析，必然会 影响网页的运行效率;
    - 所以V8引擎就实现了Lazy Parsing(延迟解析)的方案，它的作用是将不必要的函数进行预解析，也就是只解析暂 时需要的内容，而对函数的全量解析是在函数被调用时才会进行;
    - 比如我们在一个函数outer内部定义了另外一个函数inner，那么inner函数就会进行预解析;
    
      
- 生成AST树后，会被Ignition转成字节码(bytecode)，之后的过程就是代码的执行过程(后续会详细分析)。



浏览器渲染：

1. css加载不会阻塞DOM树的解析
2. css加载会阻塞DOM树的渲染
3. css加载会阻塞后面js语句的执行



typescript编译出来的代码比原来我们使用JavaScript编写的代码要快，因为v8引擎。

函数的scopeChain = 此函数的AO + parentScope

函数的作用链是定义的时候决定的，因为v8引擎使用的词法作用域编译。

函数在初次编译时（初次编译会给这个函数分配内存地址，但是不会创建AO对象等等。）， 只有在函数执行的时候，在即将要执行的时候创建VO对象，然后去编译函数，在函数执行的**过程中**给这个VO对象进行赋值操作，此时VO对象变成了AO对象，表示这个对象被激活了。
