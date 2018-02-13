/**
 * Created by VULCAN on 2018/1/24.
 */
const koa = require('./modules/koa')

const app = new koa()
app.listen(3000)

app.use(async function (ctx, next) {
    console.log(1111)
    await next()
    console.log(6666)
})
app.use(async function (ctx, next) {
    console.log(2222)
    let a = await next()
    console.log(a)
    console.log(5555)
})
app.use(async function (ctx, next) {
    console.log(3333);
    return new Promise(r => {
        setTimeout(() => {
            r('s')
            console.log(4444)
        }, 2000)
    })
})

