const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const { rootRouter } = require('./routers');
const app = express();

app.use(express.json());

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));

app.use('/api/v1', rootRouter);


const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server listening on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (err) {
        console.log('Database not connected');
        console.log(err);
    }
})