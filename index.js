const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());
const basicInfo = require('./basicInfo');
const components = require('./components');
const usersRouter = require('./routes/users');
const usersDocs = require('./docs/users');
const swaggerUI = require('swagger-ui-express');


app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = (
    basicInfo,
    components
);