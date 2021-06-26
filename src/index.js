// const express = require('express')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')
// const db = require('./db/mongoose')

// const port = process.env.PORT || 3000
// const app = express()

// //middleware functions
// // app.use((req, res, next) => {
// //     if (req.method === 'GET') {
// //         res.send('GET requests are disbaled')
// //     } else {
// //         next()
// //     }
// // })

// // app.use((req, res, next) => {
// //     res.status(503).send('Site is currently down')
// // })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is on port: ' + port)
// })

// const Task = require('./models/task')
// const User = require('./models/user')
// const main= async () => {
//     // const task = await Task.findById('60d57c59823c6e0554f2f981')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('60d57c18823c6e0554f2f97e')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }
// main ()

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})