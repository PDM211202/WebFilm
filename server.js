const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const { rootRouter } = require('./routers');
const app = express();

app.use(express.json());

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

app.use('/api/v1', rootRouter);

app.listen(7000, async () => {
    console.log('Server listening on http://localhost:3000');
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (err) {
        console.log('Database not connected');
        console.log(err);
    }
})