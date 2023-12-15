const ProductSchema = require("../models/product.model")



//? Read All

module.exports.FindAllProduct = (req, res) => {
    // db.Product.find()
    ProductSchema.find()
        .then((AllProducts) => {
            console.log(AllProducts)
            res.json(AllProducts)
        })
        .catch(err => {
            res.status(400).json(err)
        })}



//? Create

module.exports.CreateNewProduct = (req, res) => {
    // db.Product.insertOne({fistName:65454})
    console.log(req.body)
    ProductSchema.create(req.body)
        .then(CreateProduct => {
            console.log(CreateProduct)
            res.json({ newProduct: CreateProduct })
        })
        .catch(err => {
            res.status(400).json(err)
        })}

//? Read One

module.exports.FindOneSingleProduct = (req, res) => {
    ProductSchema.findOne({ _id: req.params.productId })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingProduct = (req, res) => {
    ProductSchema.deleteOne({ _id: req.params.productId })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? UPDATE

module.exports.updateExistingProduct = (req, res) => {
    console.log(req.body);
    ProductSchema.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}