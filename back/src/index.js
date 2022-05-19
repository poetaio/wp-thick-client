require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/index');
const { errorHandlingMiddleware, notFoundMiddleware } = require('./middleware');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('*', notFoundMiddleware);
app.use(errorHandlingMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // await sequelize.sync({ force: true });

        app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
    } catch(e) {
        console.error(e);
    }
}

start();
