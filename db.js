const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host : '34.101.58.213',
    user : 'root',
    password : '',
    database : 'bengkel'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("Database Connected");
});
module.exports = dbConn;