const AuthorSchema = require("../models/author.model")



//? Read All

module.exports.FindAllAuthor = (req, res) => {
    // db.Author.find()
    AuthorSchema.find()
        .then((AllAuthors) => {
            console.log(AllAuthors)
            res.json(AllAuthors)
        })
        .catch(err => {
            res.status(400).json(err)
        })}



//? Create

module.exports.CreateNewAuthor = (req, res) => {
    // db.Author.insertOne({fistName:65454})
    console.log(req.body)
    AuthorSchema.create(req.body)
        .then(CreateAuthor => {
            console.log(CreateAuthor)
            res.json({ newAuthor: CreateAuthor })
        })
        .catch(err => {
            res.status(400).json(err)
        })}

//? Read One

module.exports.FindOneSingleAuthor = (req, res) => {
    AuthorSchema.findOne({ _id: req.params.authorId })
        .then(oneSingleAuthor => {
            res.json(oneSingleAuthor)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingAuthor = (req, res) => {
    AuthorSchema.deleteOne({ _id: req.params.authorId })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? UPDATE

module.exports.updateExistingAuthor = (req, res) => {
    console.log(req.body);
    AuthorSchema.findOneAndUpdate({ _id: req.params.authorId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}