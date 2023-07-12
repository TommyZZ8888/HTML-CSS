//封装js模块
// function myModule(){
//     var msg = 'stefanie'

//     function doSomething(){
//         console.log('doSomething'+msg.toUpperCase())
//     }

//     function doOtherThing(){
// console.log('doOtherThing() ' + msg.toLowerCase())
//     }

//     return {
//         doSomething1: doSomething,
//         doOtherThing2: doOtherThing
//     }
// }



//（是一个立即执行的匿名函数）
(function myModule(){
    var msg = 'stefanie'

    function doSomething(){
        console.log('doSomething'+msg.toUpperCase())
    }

    function doOtherThing(){
console.log('doOtherThing() ' + msg.toLowerCase())
    }

    return {
        doSomething1: doSomething,
        doOtherThing2: doOtherThing
    }
})()

// <!--引入myModule文件-->
{/* <script type="text/javascript" src="myModule2.js"></script>
<script type="text/javascript">
    myModule.doSomething1()
    myModule.doOtherthing2()
</script> */}