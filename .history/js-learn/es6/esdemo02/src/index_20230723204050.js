var obj1 = {username:"tommy",age:26}
var obj2 = {address:"nanjing"}

// obj2 = Object.create(obj1)


    obj2 = Object.create(obj1, {
        sex: {//给obj2添加新的属性`sex`。注意，这一行的冒号不要漏掉
            value: '男',  //通过value关键字设置sex的属性值
            writable: false,
            configurable: true,
            enumerable: true
        }
    });

console.log(obj2)