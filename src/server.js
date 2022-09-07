const app = require('./app')
const configs = require("./configs")

app.listen(configs.port, () => {
    console.log(`server runnig on port: ${configs.port}`)
})