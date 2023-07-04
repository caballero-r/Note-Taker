// Required Imports
const router = require('express').Router()
const fs = require('fs/promises')
const db = require('../db/db.json')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// Fetches all notes from the database.
router.get('/notes', (req, res) => {
	fs.readFile(path.join(__dirname, '../db/db.json')).then(response => {
		res.status(200).json(JSON.parse(response));
	})
})

// Creates a new note with title and text, and adds to the database.
router.post('/notes', (req, res) => {
	const { title, text} = req.body

	if (text && text) {
		const newNote = {
			title,
			text,
			// Generating a unique ID for the new note using UUID
			id: uuidv4(),
		}
		fs.readFile(path.join(__dirname, '../db/db.json'), {encoding: 'utf-8'}).then(response => {
			const parsedNotes = JSON.parse(response)
			parsedNotes.push(newNote)
			const dataStr = JSON.stringify(parsedNotes, null, 2)
			fs.writeFile(path.join(__dirname, '../db/db.json'), dataStr)
			const reply = {
				body: newNote,
			}
			res.status(200).json(reply);
		})
	}
})

// Export
module.exports = router
