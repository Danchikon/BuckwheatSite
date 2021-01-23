const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const exphbs = require("express-handlebars")
const productRouter = require("./routes/products")

const PORT = process.env.PORT || 3000

const uri = "mongodb+srv://User:772298NOne@hrechkacluster.m9aqq.mongodb.net/buckwheat?retryWrites=true&w=majority"

const app = express();
hbs = exphbs.create({
    // defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
 
app.use(express.static(path.join(__dirname, 'public')))

app.use("/products", productRouter)
app.use('/', (req, res) => {
    res.render('index.hbs')
});

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true
        });

        app.listen(PORT, () => {
            console.log("server has been started")
        })
    } catch (e) {
        console.log(e)
    }
}

start()
