const express = require("express")
const cors = require("cors")
const mysql=require("mysql")
const app=express();

app.use(cors());
app.use(express.json())

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

app.post('/create/student', (req,res) => {
    const sqlQuery = "INSERT INTO student (`Name`, `Email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sqlQuery, [values], (err, data) => {
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.put('/update/student/:id', (req,res) => {
    const sqlQuery = "update student set `Name` =? ,`Email` = ? where ID = ?"
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id
    db.query(sqlQuery, [...values, id], (err, data) => {
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.delete('/delete/student/:id', (req,res) => {
    const sqlQuery = "DELETE from student where ID = ?"

    const id = req.params.id
    db.query(sqlQuery, [id], (err, data) => {
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.listen(port, ()=> {
    console.log("Running at ", port)
})
