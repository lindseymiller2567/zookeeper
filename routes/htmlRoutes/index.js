const router = require('express').Router();
const path = require('path');

// get route to view index.html in the browser 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    console.log(__dirname)
});

// get route to view the animals.html page in the browser
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
})

// get route to view the zookeepers.html page in teh broswer
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// wildcard route (in case user tries to access route that doesn't exist)
// NOTE: this wildcard route should always come last in the order of routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router; 