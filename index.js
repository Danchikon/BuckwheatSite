const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")

const PORT = process.env.PORT || 8080

const uri = "mongodb+srv://User:772298NOne@hrechkacluster.m9aqq.mongodb.net/buckwheat?retryWrites=true&w=majority";

const app = express()
hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log("server has been started")
        })
    } catch (e) {
        console.log(e)
    }
}

start()
