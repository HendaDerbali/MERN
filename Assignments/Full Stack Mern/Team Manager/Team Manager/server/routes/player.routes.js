const PlayerController = require("../controllers/player.controller")



module.exports = (app) => {
    app.get("/api/player", PlayerController.FindAllPlayer)
    app.get("/api/player/:playerId", PlayerController.FindOneSinglePlayer)
    app.patch("/api/player/:playerId", PlayerController.updateExistingPlayer)
    app.post("/api/player", PlayerController.CreateNewPlayer)
    app.delete("/api/player/:playerId", PlayerController.deleteAnExistingPlayer)
}