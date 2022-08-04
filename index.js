const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'rootroot',
    database: 'more_sauce_library'
})


app.listen(8080, () => {
    console.log("Dripping Sauce 🍟")
});