const express = require("express")
const server = express()

// import database object
const db = require("./database/db")

// configure folder public in order to find static files
server.use(express.static("public"))

// Enable req.body in our server (app)
server.use(express.urlencoded({extended: true}))

// using template engine for html it is recommended to install extensions
// @Nunjucks template (eseom) for vscode and npm install nunjucks
// Nunjunck is useful for include html, extends template with blocks, 
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
    console.log(req.query)
    return res.render("create-point.html")

})

server.post("/save-point", (req, res) => {

    // By default, the body is disable in express 
    console.log(req.body)
    // insert data on table
    const query = `
        INSERT INTO places (
                image, 
                name, 
                address,
                address2,
                state,
                city,
                items
        ) values(?,?,?,?,?,?,?) 
    `
      const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]


    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro") 
        }
        console.log("Cadastrado com sucesso.")
        // this refer the run response.
        console.log(this)
    }


    // Do not use array function, because you can not use this.
    db.run(query, values, afterInsertData)


    return res.render("create-point.html", { saved: true })
})

server.get("/search", (req, res) => {

    // check using query string if search is empty
    const search = req.query.search
    if(search == ""){
        return res.render("search-results.html", {total: 0})
    }
    
    // query data from table
    // string in SQL is in ''
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Here are the registries:")
        console.log(rows)
        
        total = rows.length

        // Pass the object that represents the datas in property places
        // to the html file
        return res.render("search-results.html", { places: rows, total: total  })
    })

})
server.listen(3000)