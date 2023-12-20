const PlayerSchema = require("../models/player.model")



//? Read All

module.exports.FindAllPlayer = (req, res) => {
    // db.Player.find()
    PlayerSchema.find()
        .then((AllPlayers) => {
            console.log(AllPlayers)
            res.json(AllPlayers)
        })
        .catch(err => {
            res.status(400).json(err)
        })}



//? Create

module.exports.CreateNewPlayer = (req, res) => {
    // db.Player.insertOne({fistName:65454})
    console.log(req.body)
    PlayerSchema.create(req.body)
        .then(CreatePlayer => {
            console.log(CreatePlayer)
            res.json({ newPlayer: CreatePlayer })
        })
        .catch(err => {
            res.status(400).json(err)
        })}

//? Read One

module.exports.FindOneSinglePlayer = (req, res) => {
    PlayerSchema.findOne({ _id: req.params.playerId })
        .then(oneSinglePlayer => {
            res.json(oneSinglePlayer)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingPlayer = (req, res) => {
    PlayerSchema.deleteOne({ _id: req.params.playerId })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? UPDATE

module.exports.updateExistingPlayer = (req, res) => {
    console.log(req.body);
    PlayerSchema.findOneAndUpdate({ _id: req.params.playerId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}