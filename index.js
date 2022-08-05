const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'rootroot',
    database: 'more_sauce_library'
})

// const restaurantRoutes = require('./routes/restaurants');
// app.use('/restaurants', restaurantRoutes);

// const sauceRoutes = require('./routes/sauces');
// app.use('/sauces', sauceRoutes);

// const userRoutes = require('./routes/users');
// app.use('/users', userRoutes);

const commentRoutes = require('./routes/comments.js');
app.use('/comments', commentRoutes);

app.listen(3001, () => {
    console.log("Sauce on🍟")
});