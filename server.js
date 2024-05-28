const express = require("express")
const cors = require("cors")
const mysql=require("mysql")
const app=express();

app.use(cors())
const port = 3000;

mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req,res) => {
    res.json("Backend communicating...")
})

app.listen(port, ()=> {
    console.log("Running at ", port)
})
