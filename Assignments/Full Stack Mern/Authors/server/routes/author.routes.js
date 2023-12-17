const AuthorController = require("../controllers/author.controller")



module.exports = (app) => {
    app.get("/api/author", AuthorController.FindAllAuthor)
    app.get("/api/author/:authorId", AuthorController.FindOneSingleAuthor)
    app.patch("/api/author/:authorId", AuthorController.updateExistingAuthor)
    app.post("/api/author", AuthorController.CreateNewAuthor)
    app.delete("/api/author/:authorId", AuthorController.deleteAnExistingAuthor)
}