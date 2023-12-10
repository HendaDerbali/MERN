const JokeController = require("../controllers/joke.controller")



module.exports = (app) => {
    app.get("/api/joke", JokeController.FindAllJokes)
    app.post("/api/joke", JokeController.CreateNewJoke)
    app.get("/api/joke/:JokeId", JokeController.FindOneSingleJoke)
    app.delete("/api/joke/:JokeId", JokeController.deleteAnExistingJoke)
    app.patch("/api/joke/:JokeId", JokeController.updateExistingJoke)


}