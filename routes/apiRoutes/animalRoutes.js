const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

// get route 1
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    // console.log(req.query)
    res.json(results);
});

// get route 2
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404)
    }
});

// post route
router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    // req.body is where our incoming content will be
    req.body.id = animals.length.toString();

    // if any data in the req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.')
    } else {
        const animal = createNewAnimal(req.body, animals);  // add animal to json file and animals array in this function 
        res.json(animal)
    }
});

module.exports = router;