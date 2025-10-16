const express = require('express');
const { addUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);

module.exports = router;
