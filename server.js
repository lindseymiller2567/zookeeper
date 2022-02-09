const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware functions 
app.use(express.urlencoded({ extended: true }));  // parse (convert) incoming string or array data
app.use(express.json());  // parse incoming JSON data
app.use(express.static('public'))  // instructs the server to make these files static resources 

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})