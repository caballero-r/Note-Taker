// Required Import
const router = require('express').Router();
const path = require('path');

// Routes Setup
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Export
module.exports = router;