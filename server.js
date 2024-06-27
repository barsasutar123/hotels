const express = require('express');
const app = express();
const db = require('./db');
const personRoutes = require('./routes/personRoutes'); 
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to my hotel');
});

app.use('/person', personRoutes);
app.use('/menuItem', menuItemRoutes);

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
