var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'efa-dev-db.ccjcom0ti80p.us-east-1.rds.amazonaws.com',
  user     : 'efa-dev',
  password : 'efa-dev-2018!',
  database : 'efa_blockchain'
});

connection.connect();

// connection.query('SELECT * from blocks LIMIT 1', function (err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0]);
// })

module.exports = connection;
//connection.end();
