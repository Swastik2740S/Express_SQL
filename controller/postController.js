const db = require('../config/db');

// ✅ Create a Post (Using async/await)
exports.createPost = async (req, res) => {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const sql = "INSERT INTO posts (title, content, author) VALUES (?, ?, ?)";
        const [result] = await db.execute(sql, [title, content, author]);

        res.status(201).json({ message: "Post created successfully", id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Get All Posts (Using async/await)
exports.getPosts = async (req, res) => {
    try {
        const sql = "SELECT * FROM posts ORDER BY created_at DESC";
        const [results] = await db.execute(sql); // `execute` returns an array

        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
