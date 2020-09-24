const express = require('express');
const cors = require('cors'); // To fix *Access to XMLHttpRequest* error 
const mysql = require('mysql');
const app = express();
app.use(cors()); // To fix *Access to XMLHttpRequest* error 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'covid_form'
});

connection.connect(err => {
    if(err){
        // console.trace('fatal error: ' + err.message);
        return err;
    }
});

// console.log(connection);

app.get('/',(req,res) => {
    res.send('go to /login')
});

app.post('/login', (req,res) => {
    console.log('Got body:', req.body.pin);
    connection.query("SELECT * FROM users WHERE password ="+ req.body.pin, (err, results) => {
        if(err){
            return res.json({
                error: true, message: "The user doesn't exist!"
            })
            // return res.send(err);
        } else if (results.length == 0) {
            return res.json({
                error: true, message: "The user doesn't exist!"
            })
        } 
        else {
            return res.json({
                status: true,
                user: results
            })
        }
    });
});

app.get('/status', (req,res) => {
    connection.query("SELECT * FROM status", (err, results) => {
        if(err){
            return res.send(err);
        }
        else {
            return res.json({
                user: results
            })
        }
    });

});


app.get('/status/add', (req, res) => {
    const {user_id, fever, cough, breath, sore, runny, taste, feeling, vomiting, contact, travel, tem, date, time} = req.query;
    const INSERT_PRODCUTS_QUERY = `INSERT INTO status (user_id, fever, cough, breath, sore, runny, taste, feeling, vomiting, contact, travel, tem, date, time) VALUES('${user_id}', '${fever}', '${cough}', '${breath}', '${sore}', '${runny}', '${taste}' ,'${feeling}', '${vomiting}','${contact}','${travel}', '${tem}', '${date}', '${time}')`;
    connection.query(INSERT_PRODCUTS_QUERY,(err, results)=>{
        if(err){
            return res.send(err);
        }
        else {
            return res.send('successfully')
        }
    })
})


