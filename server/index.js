const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM users';

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



app.listen(4000, () => {
    console.log('port 4000')
});