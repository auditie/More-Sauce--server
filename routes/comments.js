const express = require('express')
const router = express.Router()
// const fs = require('fs')
// const { v4: uuid } = require('uuid');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'rootroot',
    database: 'more_sauce_library'
})

router.post('/', (req, res) => {
    // const newComment = {
    //     id: uuid(),
    //     sauceId: req.body.sauceId,
    //     comment: req.body.comment,
    //     userId: req.body.userId
    // }
    const comment = req.body.comment;
    const sauceId = req.body.sauceId;
    const userId = req.body.userId;

    db.query('INSERT INTO sauce_comments (comment, sauceId, userId) VALUES (?,?,?)', 
    [comment, sauceId, userId], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Comment inserted");
        }
    }
    )
});

router.get('/', (req, res) => {
    db.query
})

