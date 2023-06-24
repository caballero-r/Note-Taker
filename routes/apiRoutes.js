const router = require('express').Router()
const fs = require('fs/promises')
const db = require('../db/db.json')
const path = require('path')

router.get('/notes', (req, res) => {
    console.log({ method: req.method, db: db })
	res.json(db);
})

router.post('/notes', (req, res) => {
	const Task = req.body
	db.push(Task)
	fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db))
		.then(() => {
			res.status(200).json(db)
		})
		.catch((err) => {
            console.log(err)   
			res.status(500).json(db)
		})
})

module.exports = router
