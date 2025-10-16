const { client } = require('../config/db');

const savePdfCollection = client.db("invoice").collection("savePdf");

module.exports = savePdfCollection;
