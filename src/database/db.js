// import sql dependency
const sqlite3 = require("sqlite3").verbose()

// create database object to manage database
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// use db for manage
// db.serialize(() => {
//     // create table with SQL commands:
//     db.run(`
//             CREATE TABLE IF NOT EXISTS places (
//                 id              INTEGER PRIMARY KEY AUTOINCREMENT,
//                 image           TEXT,
//                 name            TEXT,
//                 address         TEXT,
//                 address2        TEXT,
//                 state           TEXT,
//                 city            TEXT,
//                 items           TEXT
//             );
//         `)

//     // insert data on table
//     const query = `
//         INSERT INTO places (
//                 image, 
//                 name, 
//                 address,
//                 address2,
//                 state,
//                 city,
//                 items
//         ) values(?,?,?,?,?,?,?) 
//     `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
//     //     "Colectoria",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos eletrônicos, Lâmpadas"
//     // ]

//    const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos eletrônicos, Lâmpadas"
//     ]


//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso.")
//         // this refer the run response.
//         console.log(this)
//     }

//     // Do not use array function, because you can not use this.
//     db.run(query, values, afterInsertData)

//     // // query data from table
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Here are the registries:")
//     //     console.log(rows)

//     // })

    // // delete from places table where id = 1
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso")
    // })

// })

