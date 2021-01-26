const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path")
const exphbs = require("express-handlebars")
const productRouter = require("./routes/products")
// const buckwheat_groats = require("./models/buckwheat")

const PORT = process.env.PORT || 3000

const uri = "mongodb+srv://User:772298NOne@cluster0.m9aqq.mongodb.net/buckwheat?retryWrites=true&w=majority"

let dbClient;

const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useFindAndModify: true
});

const app = express();
hbs = exphbs.create({
    defaultLayout: 'main.hbs',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
 
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use("/products", productRouter)
app.use('/', async (req, res) => {
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, products){
         
        if(err) return console.log(err);
        res.render('index.hbs', {
            title: "Find your hrechka",
            isIndex: true,
            products: products
        })
    });
});


mongoClient.connect((err, client) => {
    if(err){
        return console.log(err);
    }
    
    dbClient = client;
    app.locals.collection = client.db("buckwheat").collection("buckwheat_groats");
    app.listen(PORT, () => {
        console.log("server has been started")
    })
});


process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});

