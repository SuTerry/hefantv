/**
 * Created by VULCAN on 2018/1/29.
 */

var arr = []

use(function a(next) {
    console.log(111)
    next()
    // b()
    console.log(666)
})

use(function b(next) {
    console.log(222)
    next()
    // c()
    console.log(555)
})

use(function c() {
    console.log(333)
    console.log(444)
})

function use(fn) {
    arr.push(fn)
}

/*function dispatch(i) {
    arr[i](function () {
        return dispatch(i + 1)
    })
}*/

;(function () {
    /*a(function () {
     return b(function () {
     return c()
     })
     })*/

    /*arr[0](function () {
     return arr[1](function () {
     return arr[2]()
     })
     })*/

    let dispatch = i => arr[i](() => dispatch(i + 1))

    dispatch(0)

})()


