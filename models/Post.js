const db = require("../config/db");

const createPostTable = ()=>{
    const sql = `
    CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            author VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log("Error crating the table");
            
        }
        else{
            console.log("Posts table is ready");
            
        }
    });
};

createPostTable();

module.exports = db;