require('dotenv').config();

const app = require('./App');

const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log(`App running on ${process.env.NODE_ENV} mode on port ${PORT}`);
