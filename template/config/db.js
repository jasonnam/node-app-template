const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const name = process.env.DB_NAME;

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${name}`, {
  useNewUrlParser: true
});

module.exports = mongoose.connection;
