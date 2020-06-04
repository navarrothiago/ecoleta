const express = require("express")
const server = express()

// configure folder public in order to find static files
server.use(express.static("public"))

// using template engine for html
// it is recommended to install extensions
// @Nunjucks template (eseom) for vscode
// and npm install nunjucks
// Nunjunck is useful for include html, 
// extends template with blocks, 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    // TODO: only for development
    noCache: true
})

// route - when GET occur in server, server with the index.html 
server.get("/", (req, res) => {
    
    // with nunjucks, we do not need to specify the path
    // res.sendFile(__dirname + "/views/index.html")
    // using render, the server know that engine must be used. 
    return res.render("index.html")
    
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")

})

server.get("/search", (req, res) => {
    return res.render("search-results.html")

})
server.listen(3000)