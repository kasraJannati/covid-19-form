const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM users';
const SELECT_ALL_STATUS_QUERY = 'SELECT * FROM status';

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'covid_form'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

// console.log(connection);

app.use(cors());

app.get('/',(req,res) => {
    res.send('go to /users')
});




app.get('/users', (req,res) => {

    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
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


app.get('/status', (req,res) => {

    connection.query(SELECT_ALL_STATUS_QUERY, (err, results) => {
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
    // console.log(name, price);
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



app.listen(4000, () => {
    console.log('port 4000')
});