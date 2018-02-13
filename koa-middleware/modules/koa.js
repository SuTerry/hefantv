/**
 * Created by VULCAN on 2018/1/24.
 */
const http = require('http')

module.exports = class {
    constructor() {
        this.middleware = []
    }

    use(fn) {
        this.middleware.push(fn)
    }

    listen(num) {
        http.createServer(this.callback()).listen(num)
    }

    callback() {
        return (req, res) => {
            if (req.url !== '/favicon.ico') this.compose({req, res}).then(() => res.end('aaa'))
        }
    }

    compose(ctx) {
        let dispatch = i => Promise.resolve(this.middleware[i](ctx, () => dispatch(i + 1)))
        return dispatch(0)
    }
}