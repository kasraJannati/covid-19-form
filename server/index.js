const express = require('express');
const cors = require('cors'); // To fix *Access to XMLHttpRequest* error 
const mysql = require('mysql');
const app = express();


app.use(cors()); // To fix *Access to XMLHttpRequest* error 

const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

// app.use(cors());

app.get('/',(req,res) => {
    res.send('go to /login')
});




app.post('/login', (req,res) => {


    // console.log('Got body:', req);
    // console.log('Got body:', req.params);
    console.log('Got body:', req.body.pin);

    // res.send({success: true});
    res.send(req.body);
    connection.query("SELECT * from users WHERE password ="+req.body.pin, (err, results) => {
        if(err){
            console.log('error')
            return res.send(err);
        }
        else {
            console.log('ok')
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