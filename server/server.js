const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samples'
  });  

app.get('/' , (re, res) => {
    return res.json("You are looking at the backend (server-side). Port 8080.");
})

app.get('/samples', (req, res) => {
    let sqlGet = "SELECT * FROM samples.ngs_samples";
    db.query(sqlGet, (error, result) => {
        if(error) return res.json(error);
        return(res.json(result));
    });
  });

app.listen(8080, () => {
    console.log('server is listening to port 8080');
})