const { Router } = require('express')
const router = Router()

router.use("/create", function(req, res){
    res.send("Добавление товара")
})
router.use("/:id", function(req, res){
res.send(`Товар ${req.params.id}`)
})
router.use("/", function(req, res){
res.send("Список товаров")
})

module.exports = router