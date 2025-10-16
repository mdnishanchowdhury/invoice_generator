const { client } = require('../config/db');

const usersCollection = client.db("invoice").collection("users");

module.exports = usersCollection;
