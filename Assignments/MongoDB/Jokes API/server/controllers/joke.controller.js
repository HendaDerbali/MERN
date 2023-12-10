const JokeSchema = require("../models/model.joke")



// Read All

module.exports.FindAllJokes = (req, res) => {
    // db.student.find()
    JokeSchema.find()
        .then((AllJokes) => {
            console.log(AllJokes)
            res.json({ AllJokes })
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" }) })

}

//? Create

module.exports.CreateNewJoke = (req, res) => {
    // db.student.insertOne({fistName:65454})
    console.log(req.body)
    JokeSchema.create(req.body)
        .then(CreateJoke => {
            console.log(CreateJoke)
            res.json({ newJoke: CreateJoke })
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄", err }) })
}

//? Read One

module.exports.FindOneSingleJoke = (req, res) => {
    JokeSchema.findOne({ _id: req.params.JokeId }) // we use fund by id because it is unic
        .then(oneSingleJoke => {
            res.json(oneSingleJoke)
        })
        .catch((err) => {
            res.json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingJoke = (req, res) => {
    JokeSchema.deleteOne({ _id: req.params.JokeId })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}

//? UPDATE

module.exports.updateExistingJoke = (req, res) => {
    console.log(req.body);
    JokeSchema.findOneAndUpdate({ _id: req.params.JokeId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch((err) => {
            res.json(err)
        })

}