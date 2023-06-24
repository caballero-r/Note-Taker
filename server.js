const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

//Import data
const db = require('./db/db.json');

//Serve up public folder
app.use(express.static('public'));
//Parse Incoming JSON data --> JS object for us to be used in our server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Turns on routes
// app.use(routes);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)





app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}!`)
})