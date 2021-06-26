const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
//  mongoose.connect(('mongodb+srv://shahzef:UAcTiYRryVE4che1@cluster0.b9vjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false,
})

