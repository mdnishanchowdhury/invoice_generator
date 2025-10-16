const express = require('express');
const { getSavePdf, addSavePdf, deleteSavePdf } = require('../controllers/savePdfController');

const router = express.Router();

// router.get('/', getSavePdf);
router.get('/user/:email',getSavePdf);
router.post('/', addSavePdf);
router.delete('/:id', deleteSavePdf);

module.exports = router;
