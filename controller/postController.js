const db = require('../config/db');

exports.createPost = (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO posts (title, content, author) VALUES (?, ?, ?)";
    db.query(sql, [title, content, author], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "Post created successfully", id: result.insertId });
    });
};

