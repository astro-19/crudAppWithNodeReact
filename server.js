const express = require("express")
const cors = require("cors")
const mysql=require("mysql")
const app=express();

app.use(cors());

const port = 3000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req,res) => {
    const sqlQuery = "SELECT * from student"
    db.query(sqlQuery, (err, data) => {
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.listen(port, ()=> {
    console.log("Running at ", port)
})
