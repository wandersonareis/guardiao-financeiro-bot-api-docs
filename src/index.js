require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-docs.json');

const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
