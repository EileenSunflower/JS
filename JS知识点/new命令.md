## new命令

JavaScript使用`new`命令，从构造函数生成一个新对象。

```
var o = new myObject();
```

上面这种做法的问题是，一旦你忘了加上`new`，`myObject()`内部的`this`关键字就会指向全局对象，导致所有绑定在`this`上面的变量，都变成全局变量。