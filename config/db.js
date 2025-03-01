const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database: "blogdb",
});

db.connect((err) => {
    if(err)
    {
        console.log("Database connection failed",err);  
    }
    else{
        console.log("Connected sexfully!!");
        
    }
});

module.exports = db;

