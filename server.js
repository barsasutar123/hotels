const express = require('express');
const app = express();
const db = require('./db');
const personRoutes = require('./routes/personRoutes'); 
const menuItemRoutes = require('./routes/menuItemRoutes');
require('dotenv').config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to my hotel');
});

app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server is listening on port 3000');
});

