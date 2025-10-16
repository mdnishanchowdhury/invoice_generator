const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const savePdfRoutes = require('./routes/savePdfRoutes');

app.use(cors());
app.use(express.json());

// MongoDB connect
connectDB();

// user
app.use('/users', userRoutes);

// save pdf
app.use('/savePdf', savePdfRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));

