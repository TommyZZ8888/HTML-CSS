//封装js模块
function myModule(){
    var msg = 'stefanie'

    function doSomething(){
        console.log('doSomething'+msg.toUpperCase())
    }

    function doOtherThing(){
console.log('doOtherThing() ' + msg.toLowerCase())
    }

    return {
        doSomething1: doSomething,
        doOtherThing2
    }
}