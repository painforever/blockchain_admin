var express = require('express');
var app = express();
const cors = require('cors');
const axios = require('axios');
const connection = require('./config');

app.use(cors());

app.get('/total_number_of_transactions', (req, res) => {
  connection.query('SELECT COUNT(id) AS count FROM transactions', (err, rows, fields) => {
    if(err) res.json({result: err});
    else res.json({result: rows[0].count});
  });
});

app.listen(3000);
console.log('Express started on port 3000');
