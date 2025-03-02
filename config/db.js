const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blogdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testDBConnection() {
    try {
        const connection = await db.getConnection(); // Get a connection
        console.log("✅ Connected to MySQL successfully!");
        connection.release(); // Release it back to the pool
    } catch (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // Exit the app if DB fails
    }
}

testDBConnection();

module.exports = db;
